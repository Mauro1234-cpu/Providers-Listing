import { Icons } from "@/components";
import type { Clinic } from "@/types/cards";

type ProviderClinicsProps = {
  btn: string;
  clinics: Clinic[];
};

export const ProviderClinics = ({ btn, clinics }: ProviderClinicsProps) => {
  return (
    <div>
      {clinics.map((clinic) => {
        return (
          <div
            className="border-border-primary my-3 rounded-xl border p-4 leading-6"
            key={clinic.id}
          >
            <p className="text-primary">{clinic.name}</p>

            <div className="text-tertiary w-1/2 py-2 text-base font-normal">
              <p>{clinic.address}</p>
              <p className="py-1">{clinic.city}</p>
              <p>{clinic.phone}</p>
            </div>
            <button
              className="border-border-secondary flex w-full flex-row items-center justify-center gap-3 rounded-md border py-2 leading-6 font-medium"
              type="button"
            >
              <Icons.MapPin className="w-4" />
              {btn}
            </button>
          </div>
        );
      })}
    </div>
  );
};
