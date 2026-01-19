import { tv } from "tailwind-variants";

import { Icons } from "@/components";
import type { ProviderCardProps } from "@/types/cards";
import { CardModal } from "./card-modal";

const providerCardVariants = tv({
  base: "flex flex-row gap-2 align-top",
  variants: {
    length: {
      true: "pb-3",
    },
  },
});
export const ProviderCard = ({ provider }: ProviderCardProps) => {
  const { clinics, name, profile_pic, specialty } = provider;

  const firstClinic = clinics[0].name;
  const clinicsCount = clinics.length - 1;
  let extraClinics = "";
  const maxLength = 38;

  if (clinicsCount > 1) {
    extraClinics = `+ ${clinicsCount} more locations`;
  } else if (clinicsCount === 1) {
    extraClinics = `+ ${clinicsCount} more location`;
  }

  return (
    <div className="border-border-primary mx-6 mb-3 flex flex-col overflow-hidden rounded-2xl border lg:mx-0 lg:w-1/4">
      <img alt="Doctor image" src={profile_pic} />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div>
          <h1 className="mb-1 text-2xl font-semibold">{name}</h1>
          <p className="text-tertiary text-lg font-medium">{specialty.name}</p>
        </div>
        <div>
          {/* firstClinic.length > maxLength ? "pb-3" : "" */}
          <div className={providerCardVariants({})}>
            <Icons.MapPin className="w-5" />
            <p className="text-tertiary leading-6">{clinics[0].name || ""}</p>
          </div>
          <p className="text-tertiary my-3 pl-6 leading-6">{extraClinics}</p>
        </div>
        <CardModal provider={provider} />
      </div>
    </div>
  );
};
