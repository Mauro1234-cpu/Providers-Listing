import { clinics, genders, specialties } from "@/constants/filter-groups";
import type { ProviderFilters } from "@/services/providers/types";
import type { SelectedFilters } from "@/types/filters";

type SelectedProps = {
  filters: ProviderFilters;
};

export const getSelectedFilters = ({ filters }: SelectedProps): SelectedFilters => {
  return {
    selectedClinic: clinics.find((c) => {
      return c.id === filters.clinic;
    }),
    selectedSpecialty: specialties.find((s) => {
      return s.id === filters.specialty;
    }),
    selectedGender: genders.find((g) => {
      return g.id === filters.gender;
    }),
  };
};
