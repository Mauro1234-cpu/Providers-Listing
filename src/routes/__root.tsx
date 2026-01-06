import { Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { env } from "@/config/env";

const RootComponent = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Outlet />

      {env.VITE_APP_ENV === "local" && env.VITE_ENABLE_DEVTOOLS ? (
        <Suspense>
          <TanStackRouterDevtools position="bottom-left" />
          <ReactQueryDevtools buttonPosition="bottom-right" />
        </Suspense>
      ) : null}
    </div>
  );
};

export const Route = createRootRoute({ component: RootComponent });
