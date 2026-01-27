import { clinics, genders, specialties } from "@/constants/filter-groups";
import type { ProviderFilters } from "@/services/providers/types";
import type { SelectedFilters } from "@/types/filters";

type SelectedProps = {
  filters: ProviderFilters;
};

export const getSelectedFilters = ({ filters }: SelectedProps): SelectedFilters => {
  const selectedClinic =
    filters.clinic === 0
      ? undefined
      : clinics.find((c) => {
          return c.id === filters.clinic;
        });

  const selectedSpecialty =
    filters.specialty === 0
      ? undefined
      : specialties.find((s) => {
          return s.id === filters.specialty;
        });

  const selectedGender =
    filters.gender === 0
      ? undefined
      : genders.find((g) => {
          return g.id === filters.gender;
        });

  return { selectedClinic, selectedSpecialty, selectedGender };
};
