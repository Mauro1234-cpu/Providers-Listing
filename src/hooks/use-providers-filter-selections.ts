import { clinics, genders, specialties } from "@/constants/filter-groups";
import type { ProviderFilters } from "@/services/providers/types";
import type { SelectedFilters } from "@/types/filters";

type SelectedProps = {
  filters?: ProviderFilters;
};

export const getSelectedFilters = ({ filters }: SelectedProps): SelectedFilters => {
  const selectedClinic =
    filters?.clinic == null
      ? undefined
      : clinics.find((c) => {
          return c.id === filters?.clinic;
        });

  const selectedSpecialty =
    filters?.specialty == null
      ? undefined
      : specialties.find((s) => {
          return s.id === filters?.specialty;
        });

  const selectedGender =
    filters?.gender == null
      ? undefined
      : genders.find((g) => {
          return g.name === filters?.gender;
        });

  const selectedFavorited = filters?.favorited == null ? undefined : filters?.favorited;

  return { selectedClinic, selectedSpecialty, selectedGender, selectedFavorited };
};
