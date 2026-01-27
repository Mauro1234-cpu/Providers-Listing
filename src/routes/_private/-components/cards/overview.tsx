import { MailIcon } from "@/assets/mail-icon";
import { PhoneIcon } from "@/assets/phone-icon";
import { InfoRow } from "./info-row";
import { LangIcon } from "./lang-icon";

type OverviewProps = {
  subtitleAbo: string;
  desc: string | null;
  subContact: string;
  subLang: string;
  phoneInfo: string;
  emailInfo: string;
  langInfo: React.ReactNode;
};

export const Overview = ({
  desc,
  emailInfo,
  langInfo,
  phoneInfo,
  subContact,
  subLang,
  subtitleAbo,
}: OverviewProps) => {
  return (
    <>
      <div className="border-border-primary border-b py-5">
        <p className="text-primary py-1 text-lg font-medium">{subtitleAbo}</p>
        <p className="text-secondary/90 pt-2 text-base leading-6 font-normal">{desc}</p>
      </div>

      <div className="border-border-primary border-b py-4">
        <p className="text-primary pb-1 text-lg font-medium">{subContact}</p>
        <InfoRow icon={<PhoneIcon />}>{phoneInfo}</InfoRow>
        <InfoRow icon={<MailIcon />}>{emailInfo}</InfoRow>
      </div>

      <div className="pt-4">
        <p className="text-primary text-lg font-medium">{subLang}</p>
        <InfoRow icon={<LangIcon />}>{langInfo}</InfoRow>
      </div>
    </>
  );
};
