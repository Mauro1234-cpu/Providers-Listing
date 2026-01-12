import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";

import { Header } from "../header";
import { RegisterForm } from "./-components";

const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background-base-default">
      <div className="bg- w-80 rounded-2xl border border-border-default-default bg-background-default-default p-5 md:w-115">
        <Header description={t("register.description")} title={t("register.register")} />
        <RegisterForm />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/(public)/_guest/register/")({ component: RegisterPage });
