import { t } from "i18next";

import { MailIcon } from "@/assets/mail-icon";
import { PhoneIcon } from "@/assets/phone-icon";
import { InfoRow } from "./info-row";
import { LangIcon } from "./lang-icon";

type OverviewProps = {
  desc: string | null;
  phoneInfo: string;
  emailInfo: string;
  langInfo: React.ReactNode;
};

export const Overview = ({ desc, emailInfo, langInfo, phoneInfo }: OverviewProps) => {
  return (
    <div className="flex flex-col gap-5 overflow-y-auto">
      <div className="border-b border-border-default-default pb-5">
        <p className="py-1 text-lg font-medium text-text-default-default">
          {t("modal.overview.about")}
        </p>
        <p className="pt-2 leading-6 text-text-default-secondary">{desc}</p>
      </div>

      <div className="border-b border-border-default-default pb-5">
        <p className="pb-1 text-lg font-medium text-text-default-default">
          {t("modal.overview.contact")}
        </p>
        <div className="flex flex-col pl-1 lg:flex-row lg:items-center lg:gap-6">
          <InfoRow icon={<PhoneIcon className="size-5" />}>{phoneInfo}</InfoRow>
          <InfoRow icon={<MailIcon className="size-5" />}>{emailInfo}</InfoRow>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-primary text-lg font-medium">{t("modal.overview.langs")}</p>
        <InfoRow icon={<LangIcon />}>{langInfo}</InfoRow>
      </div>
    </div>
  );
};
