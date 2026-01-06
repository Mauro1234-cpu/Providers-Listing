import * as Sentry from "@sentry/react";
import { QueryClient } from "@tanstack/react-query";
import { HttpStatusCode, isAxiosError } from "axios";
import { ZodError } from "zod";

import { env } from "./env";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 5, // 5 minutes - keep data in cache for 5 minutes after last observer
      staleTime: 1000 * 60 * 2, // 2 minutes - consider data fresh for 2 minutes
      throwOnError: (error) => {
        if (env.VITE_APP_ENV !== "production" && error instanceof ZodError) {
          // eslint-disable-next-line no-console
          console.error(error.issues);
        }

        Sentry.captureException(error);

        return false;
      },
      retry: (failureCount, error) => {
        return error instanceof ZodError ||
          (isAxiosError(error) &&
            error.response?.status &&
            [
              HttpStatusCode.Unauthorized,
              HttpStatusCode.Forbidden,
              HttpStatusCode.NotFound,
            ].includes(error.response.status))
          ? false
          : failureCount <= 3;
      },
    },
  },
});
