import { t } from "i18next";
import { tv } from "tailwind-variants";

import { NoImage } from "@/assets/no-image";
import { Icons } from "@/components";
import type { ProviderCardProps } from "@/types/cards";
import { CardModal } from "./card-modal";

const providerCardVariants = tv({
  base: "flex flex-row items-center gap-2 align-top",
  variants: {
    length: {
      true: "pb-3",
    },
  },
});

export const ProviderCard = ({ count, filters, provider, updateFilters }: ProviderCardProps) => {
  const { clinics, name, profilePic, specialty } = provider;

  const clinicsCount = clinics.length - 1;
  let extraClinics = "";

  if (clinicsCount > 1) {
    extraClinics = `+ ${clinicsCount} more locations`;
  } else if (clinicsCount === 1) {
    extraClinics = `+ ${clinicsCount} more location`;
  }

  return (
    <div className="mx-6 mb-3 flex flex-col overflow-hidden rounded-2xl border border-border-default-default lg:mx-0 lg:w-1/4">
      <div className="relative">
        {profilePic ? (
          <img alt="Doctor image" className="h-55 w-full object-cover" src={profilePic} />
        ) : (
          <NoImage className="h-full" />
        )}
        <button className="absolute top-3 right-3 rounded-full bg-white p-2 shadow-md">
          <Icons.Heart className="size-5" />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div>
          <h1 className="mb-1 text-2xl font-semibold text-text-default-default">
            {t("cards.name", { field: name })}
          </h1>
          <p className="text-xl font-medium text-text-default-tertiary">{specialty.name}</p>
        </div>
        <div>
          <div className={providerCardVariants()}>
            <Icons.MapPin className="w-5" />
            <p className="leading-6 text-text-default-tertiary">{clinics[0].name || ""}</p>
          </div>
          <p className="my-3 pl-6 leading-6 text-text-default-tertiary">{extraClinics}</p>
        </div>
        <CardModal provider={provider} />
      </div>
    </div>
  );
};
