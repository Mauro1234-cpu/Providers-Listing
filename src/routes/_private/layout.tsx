import { useTranslation } from "react-i18next";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { NavigationMenu } from "@/components";
import type { AvailableRoutesToPath } from "@/config/router";
import { getAuthStoreState } from "@/stores";
import { Header } from "./-components";

const PrivateLayout = () => {
  const { t } = useTranslation();

  const links: { path: AvailableRoutesToPath; label: string }[] = [
    { path: "/", label: t("navigation.links.home") },
    { path: "/dashboard", label: t("navigation.links.dashboard") },
    { path: "/users", label: t("navigation.links.users") },
  ];

  return (
    <div>
      <Header />

      <main className="flex flex-col gap-4 p-4">
        <NavigationMenu.Root>
          <NavigationMenu.List>
            {links.map(({ label, path }) => {
              return (
                <NavigationMenu.Link key={path} to={path}>
                  {label}
                </NavigationMenu.Link>
              );
            })}
          </NavigationMenu.List>
        </NavigationMenu.Root>

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
