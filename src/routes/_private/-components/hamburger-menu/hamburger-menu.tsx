import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { Button, DropdownMenu, Icons } from "@/components";
import { type resources } from "@/i18n";
import { LogoutButton } from "./logout-button";

export const HamburgerMenu = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: keyof typeof resources) => {
    i18n.changeLanguage(lng);
  };

  const languages: { code: keyof typeof resources; label: string; icon: ReactNode }[] = [
    { code: "en", label: "English", icon: "🇺🇸" },
    // cspell: disable-next-line
    { code: "es", label: "Español", icon: "🇪🇸" },
  ];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          className="focus-visible:ring-background-default-default/25"
          size="icon"
          variant="secondary"
        >
          <Icons.Menu />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end">
          {languages.map(({ code, icon, label }) => {
            return (
              <DropdownMenu.Item
                key={code}
                onClick={() => {
                  changeLanguage(code);
                }}
              >
                {icon}

                <span>{label}</span>

                {i18n.language === code ? <Icons.Check className="ml-auto" /> : null}
              </DropdownMenu.Item>
            );
          })}

          <DropdownMenu.Separator />

          <DropdownMenu.Item asChild>
            <LogoutButton />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
