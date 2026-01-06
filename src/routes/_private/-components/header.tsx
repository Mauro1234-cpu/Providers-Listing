import { useTranslation } from "react-i18next";

import { HamburgerMenu } from "./hamburger-menu";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between bg-background-brand-default p-4 text-text-brand-on-brand">
      <img className="h-10" src="./logo.svg" />

      <span>{t("greetings.rootLayout")}</span>

      <HamburgerMenu />
    </header>
  );
};
