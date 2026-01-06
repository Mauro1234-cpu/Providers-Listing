import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";

const DashboardPage = () => {
  const { t } = useTranslation();

  return <div>{t("greetings.exactPath", { exactPath: Route.fullPath })}</div>;
};

export const Route = createFileRoute("/_private/dashboard/")({ component: DashboardPage });
