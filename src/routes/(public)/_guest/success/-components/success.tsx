import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";

import { Button } from "@/components";

export const Success = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="dm-sans relative flex h-full min-h-screen flex-col items-center justify-center bg-linear-to-t from-emerald-300/60 to-emerald-100/20 bg-center bg-no-repeat px-4">
      <div className="flex w-full flex-col items-center px-5">
        <div className="my-30 flex flex-col items-center gap-5 text-center md:w-4/5">
          {/* animation icon */}
          <h2 className="text-3xl">{t("register.success")}</h2>
          <p className="text-base font-normal">{t("register.successDesc")}</p>
        </div>
      </div>

      <Button
        onClick={() => {
          navigate({ to: "/login" });
        }}
      >
        {t("register.redirect")}
      </Button>
    </div>
  );
};
