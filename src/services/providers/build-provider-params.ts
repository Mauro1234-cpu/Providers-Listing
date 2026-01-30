import type { RequestParams } from "@/services/types";
import type { SelectedFilters } from "@/types/filters";
import type { ProviderFilters, ProviderRequestFilters } from "./types";

export const buildProviderParams = (
  selections: SelectedFilters,
  filter?: ProviderFilters,
): RequestParams<ProviderRequestFilters> => {
  return {
    filter: {
      clinic_id: selections.selectedClinic?.id,
      specialty_id: selections.selectedSpecialty?.id,
      gender: selections.selectedGender?.name,
      name: filter?.name || "",
      favorited: selections.selectedFavorited,
    },
  };
};
