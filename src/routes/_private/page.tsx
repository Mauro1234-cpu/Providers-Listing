import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <h3>{t("greetings.home")}</h3>
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });
