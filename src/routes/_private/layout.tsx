import { useTranslation } from "react-i18next";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { getAuthStoreState } from "@/stores";
import { Header } from "./-components";

const PrivateLayout = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header desc={t("header.description")} text="AS" title={t("header.title")} />

      <main className="flex flex-col gap-4 px-4 py-1">
        <Outlet />
      </main>
    </div>
  );
};

export const Route = createFileRoute("/_private")({
  beforeLoad: ({ location }) => {
    const { token } = getAuthStoreState();

    if (!token) {
      throw redirect({ to: "/login", search: { redirect: location.href } });
    }
  },
  component: PrivateLayout,
});
