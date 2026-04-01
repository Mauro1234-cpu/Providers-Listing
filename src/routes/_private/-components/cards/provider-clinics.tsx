import { Icons } from "@/components";
import type { Clinic } from "@/types/cards";

type ProviderClinicsProps = {
  textLink: string;
  clinics: Clinic[];
};

export const ProviderClinics = ({ clinics, textLink }: ProviderClinicsProps) => {
  return (
    <div>
      {clinics.map((clinic) => {
        const searchText = `${clinic.address}`;
        const encodedSearch = encodeURIComponent(searchText);
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedSearch}`;

        return (
          <div
            className="my-3 rounded-xl border border-border-default-default p-4 leading-6"
            key={clinic.id}
          >
            <p className="text-text-default-default">{clinic.name}</p>

            <div className="w-1/2 py-2 text-base font-normal text-text-default-tertiary">
              <p>{clinic.address}</p>
              <p className="py-1">{clinic.city}</p>
              <p>{clinic.phone}</p>
            </div>
            <a
              className="border-border-secondary flex w-full flex-row items-center justify-center gap-3 rounded-md border py-2 leading-6 font-medium"
              href={mapsUrl}
            >
              <Icons.MapPin className="w-4" />
              {textLink}
            </a>
          </div>
        );
      })}
    </div>
  );
};
