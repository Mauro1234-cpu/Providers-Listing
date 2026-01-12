import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";

import { Header } from "../header";
import { LoginForm } from "./-components";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background-base-default">
      <div className="bg- flex w-80 flex-col gap-7 rounded-2xl border border-border-default-default bg-background-default-default p-5 md:w-115">
        <Header description={t("login.description")} title={t("login.welcome")} />
        <LoginForm />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/(public)/_guest/login/")({ component: LoginPage });
