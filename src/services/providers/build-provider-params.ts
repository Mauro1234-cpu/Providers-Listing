import type { RequestParams } from "@/services/types";
import type { SelectedFilters } from "@/types/filters";
import type { ProviderFilters, ProviderRequestFilters } from "./types";

export const buildProviderParams = (
  selections: SelectedFilters,
  filters?: ProviderFilters,
): RequestParams<ProviderRequestFilters> => {
  return {
    filter: {
      clinic_id: selections.selectedClinic?.id,
      specialty_id: selections.selectedSpecialty?.id,
      gender: selections.selectedGender?.id,
      name: filters?.name || undefined,
    },
  };
};
