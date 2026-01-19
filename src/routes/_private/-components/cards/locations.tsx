import type { Clinic } from "@/types/cards";
import { ProviderClinics } from "./provider-clinics";

type LocationProps = {
  subtitleLoc: string;
  btn: string;
  allClinics: Clinic[];
};

export const Locations = ({ allClinics, btn, subtitleLoc }: LocationProps) => {
  return (
    <div className="overflow-y-auto">
      <div className="pt-5">
        <p className="text-primary text-lg font-medium">{subtitleLoc}</p>
      </div>
      <ProviderClinics btn={btn} clinics={allClinics} />
    </div>
  );
};
