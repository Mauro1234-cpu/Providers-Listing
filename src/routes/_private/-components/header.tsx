import { useTranslation } from "react-i18next";

import { Logo } from "@/assets/logo";
import { HamburgerMenu } from "./hamburger-menu";

type HeaderProps = {
  title: string;
  desc: string;
  text: string;
};

export const Header = ({ desc, text, title }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    // <header className="flex items-center justify-between bg-background-brand-default p-4 text-text-brand-on-brand">
    //   <img className="h-10" src="./logo.svg" />

    //   <span>{t("greetings.rootLayout")}</span>

    //
    // </header>
    <div className="border-border-primary mx-5 flex flex-row items-center justify-between border-b py-5 lg:mx-0 lg:px-35">
      <div className="flex flex-row items-center">
        <Logo className="w-11" />
        <div className="mx-3 flex flex-col">
          <h1 className="text-primary text-2xl font-semibold">{title}</h1>
          <p className="text-tertiary text-sm">{desc}</p>
        </div>
        <HamburgerMenu />
      </div>
      <p className="bg-default flex size-10 items-center justify-center rounded-full leading-5 text-white">
        {text}
      </p>
    </div>
  );
};
