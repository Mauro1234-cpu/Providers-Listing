import { useState } from "react";
import { t } from "i18next";
import { tv } from "tailwind-variants";

import { OverviewIcon } from "@/assets/overview-icon";
import { Icons } from "@/components";
import { PROVIDER_TABS } from "@/constants/provider-tabs";
import type { ProviderProps } from "@/types/cards";
import { Button } from "./button";
import { Locations } from "./locations";
import { Overview } from "./overview";

type ProviderModalProps = {
  provider: ProviderProps;
};

const cardModalVariants = tv({
  base: "fixed inset-0 z-50 flex items-center justify-center",
  variants: {
    open: {
      true: "flex",
      false: "hidden",
    },
  },
});

export const CardModal = ({ provider }: ProviderModalProps) => {
  const [open, setOpen] = useState(false);
  const overview = PROVIDER_TABS.OVERVIEW;
  const upperOverview = "Overview";
  const location = PROVIDER_TABS.LOCATIONS;
  const upperLocation = "Location";
  const [isSelected, setIsSelected] = useState(overview.toLowerCase());

  const { about, clinics, email, languages, name, phone, profile_pic, specialty } = provider;
  const language = () => {
    return languages?.join(", ");
  };

  const providerPic = profile_pic || undefined;

  return (
    <>
      <button
        className="mt-auto w-full rounded-md bg-background-brand-default p-2 text-white"
        onClick={() => {
          setOpen((o) => {
            return !o;
          });
        }}
      >
        {t("cards.button")}
      </button>

      <div className={cardModalVariants({ open })}>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/50"
          onClick={() => {
            return setOpen(false);
          }}
        />
        <div className="relative mx-6 h-7/10 w-8/10 overflow-y-auto rounded-xl border border-border-default-default bg-background-default-default p-4 shadow-xl lg:w-2/5">
          <button
            className="absolute top-3 right-3 z-10 p-1"
            onClick={() => {
              return setOpen(false);
            }}
          >
            <Icons.Close className="w-4" />
          </button>
          <div className="flex flex-row items-center gap-4">
            <img alt="Doctor image" className="w-22 rounded-lg" src={providerPic} />
            <div>
              <h1 className="mb-1 text-3xl font-semibold text-text-default-default">
                {t("cards.name", { field: name })}
              </h1>
              <p className="text-lg font-medium text-text-default-tertiary">{specialty.name}</p>
            </div>
          </div>

          <div className="mt-7 items-center gap-4 rounded-3xl bg-background-brand-tertiary p-1">
            <div className="flex flex-row justify-center rounded-3xl">
              <Button
                icon={<OverviewIcon />}
                nameBtn={overview.toLowerCase()}
                selected={isSelected}
                setSelected={setIsSelected}
                text={upperOverview}
              />
              <Button
                icon={<Icons.MapPin />}
                nameBtn={location.toLowerCase()}
                selected={isSelected}
                setSelected={setIsSelected}
                text={upperLocation}
              />
            </div>
          </div>

          {isSelected === overview.toLowerCase() && (
            <Overview
              desc={about}
              emailInfo={email}
              langInfo={language()}
              phoneInfo={phone}
              subContact="Contact information"
              subLang="Languages"
              subtitleAbo="About"
            />
          )}

          {isSelected === location.toLowerCase() && (
            <Locations allClinics={clinics} btn="View on Google Maps" subtitleLoc="Locations" />
          )}
        </div>
      </div>
    </>
  );
};
