import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";

import { Button } from "@/components";
import { SuccessAnimation } from "./success-animation";

export const Success = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="dm-sans relative flex h-full min-h-screen flex-col items-center justify-center gap-30 bg-linear-to-t from-background-success-secondary-hover/60 to-background-success-secondary/20 bg-center bg-no-repeat px-4">
      <div className="flex w-full flex-1 flex-col items-center justify-center px-5">
        <div className="flex flex-col items-center text-center md:w-4/5">
          <SuccessAnimation />
          <h2 className="text-3xl">{t("register.success")}</h2>
          <p className="my-1 text-base font-normal">{t("register.successDesc")}</p>
        </div>
      </div>

      <Button
        className="mb-12 h-10 w-80 lg:w-103"
        onClick={() => {
          navigate({ to: "/login" });
        }}
      >
        {t("register.redirect")}
      </Button>
    </div>
  );
};
