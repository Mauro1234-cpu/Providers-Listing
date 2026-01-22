import { createFileRoute } from "@tanstack/react-router";

import { Success } from "./-components";

const SuccessPage = () => {
  return <Success />;
};

export const Route = createFileRoute("/(public)/_guest/success/")({ component: SuccessPage });
