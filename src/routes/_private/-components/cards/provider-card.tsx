import { tv } from "tailwind-variants";

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
export const ProviderCard = ({ provider }: ProviderCardProps) => {
  const { clinics, name, profile_pic, specialty } = provider;

  const clinicsCount = clinics.length - 1;
  let extraClinics = "";

  if (clinicsCount > 1) {
    extraClinics = `+ ${clinicsCount} more locations`;
  } else if (clinicsCount === 1) {
    extraClinics = `+ ${clinicsCount} more location`;
  }

  const providerPic = profile_pic || undefined;

  return (
    <div className="mx-6 mb-3 flex flex-col overflow-hidden rounded-2xl border border-border-default-default lg:mx-0 lg:w-1/4">
      <img alt="Doctor image" src={providerPic} />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div>
          <h1 className="mb-1 text-2xl font-semibold text-text-default-default">{name}</h1>
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
