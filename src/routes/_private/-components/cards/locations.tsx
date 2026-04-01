import { t } from "i18next";

import type { Clinic } from "@/types/cards";
import { ProviderClinics } from "./provider-clinics";

type LocationProps = {
  allClinics: Clinic[];
};

export const Locations = ({ allClinics }: LocationProps) => {
  return (
    <div className="overflow-y-auto">
      <div className="pt-5">
        <p className="text-lg font-medium text-text-default-default">{t("modal.location.name")}</p>
      </div>
      <ProviderClinics clinics={allClinics} textLink={t("modal.location.redirect")} />
    </div>
  );
};
