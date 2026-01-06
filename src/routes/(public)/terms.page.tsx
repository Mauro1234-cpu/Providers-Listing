import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";

const TermsPage = () => {
  const { t } = useTranslation();

  return <div>{t("greetings.exactPath", { exactPath: "/terms" })}</div>;
};

export const Route = createFileRoute("/(public)/terms/")({
  component: TermsPage,
});
