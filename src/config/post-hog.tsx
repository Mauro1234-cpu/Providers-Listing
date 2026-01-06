import type { PropsWithChildren } from "react";
import posthog from "posthog-js";
import { PostHogProvider as ReactPostHogProvider } from "posthog-js/react";

import { env } from "@/config/env";

posthog.init(env.VITE_POSTHOG_API_KEY ?? "", { api_host: env.VITE_POSTHOG_HOST });

export const PostHogProvider = ({ children }: PropsWithChildren) => {
  return <ReactPostHogProvider client={posthog}>{children}</ReactPostHogProvider>;
};
