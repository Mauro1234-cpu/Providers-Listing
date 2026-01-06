import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { z } from "zod";

import { getAuthStoreState } from "@/stores";

const GuestLayout = () => {
  return <Outlet />;
};

export const Route = createFileRoute("/(public)/_guest")({
  component: GuestLayout,
  validateSearch: z.object({
    redirect: z.string().optional().catch(""),
  }),
  beforeLoad: ({ search }) => {
    const { token } = getAuthStoreState();

    if (token) {
      throw redirect({ to: search.redirect || "/" });
    }
  },
});
