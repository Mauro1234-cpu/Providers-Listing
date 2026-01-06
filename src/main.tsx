// eslint-disable-next-line simple-import-sort/imports -- react-scan must be imported before React and React DOM
import { scan } from "react-scan";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import { initializeIcons, Toaster, TooltipProvider } from "@/components";
import { queryClient } from "@/config/query-client";
import { router } from "@/config/router";
import { getSentryErrorHandlers, initializeSentry } from "@/config/sentry";
import { I18nextProvider } from "@/i18n";
import reportWebVitals from "@/reportWebVitals";

import "@/styles.css";
import { env } from "./config/env";

initializeSentry();
initializeIcons();
scan({ enabled: Boolean(env.VITE_APP_ENV === "local" && env.VITE_ENABLE_REACT_SCAN) });

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement, getSentryErrorHandlers());

  root.render(
    <StrictMode>
      <I18nextProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <RouterProvider router={router} />
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
