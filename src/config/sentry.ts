import * as Sentry from "@sentry/react";

import { env } from "@/config/env";
import { router } from "./router";

export const isSentryEnabled = Boolean(env.VITE_SENTRY_DSN);

export const initializeSentry = () => {
  if (!isSentryEnabled) {
    return;
  }

  Sentry.init({
    dsn: env.VITE_SENTRY_DSN,
    integrations: [
      Sentry.tanstackRouterBrowserTracingIntegration(router),
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: [new RegExp(env.VITE_SENTRY_TRACE_PROPAGATION_TARGET_REGEX)],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
};

export const getSentryErrorHandlers = () => {
  if (!isSentryEnabled) {
    return {};
  }

  return {
    onUncaughtError: Sentry.reactErrorHandler((error, errorInfo) => {
      // eslint-disable-next-line no-console
      console.warn("Uncaught error", error, errorInfo.componentStack);
    }),
    onCaughtError: Sentry.reactErrorHandler(),
    onRecoverableError: Sentry.reactErrorHandler(),
  };
};
