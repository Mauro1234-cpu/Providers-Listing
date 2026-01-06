import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";

const RegisterPage = () => {
  const { t } = useTranslation();

  return <div>{t("greetings.exactPath", { exactPath: "/register" })}</div>;
};

export const Route = createFileRoute("/(public)/_guest/register/")({ component: RegisterPage });
