import type { clinics, genders, specialties } from "@/constants/filter-groups";
import type { ProviderFilters } from "@/services/providers/types";

export type FiltersHeaderProps = {
  title: string;
  desc: string;
  placeholder: string;
  filters: ProviderFilters;
  countProviders: number;
  textCount: string;
  favoritesFound: number;
  setFilters: React.Dispatch<React.SetStateAction<ProviderFilters>>;
};

export type FilterState = {
  specialty: (typeof specialties)[number] | "";
  gender: (typeof genders)[number] | "";
  clinic: (typeof clinics)[number] | "";
  search: string;
  favorited: boolean;
};

export type SelectedFilters = {
  selectedClinic?: {
    id: number;
    name: string;
  };
  selectedSpecialty?: {
    id: number;
    name: string;
  };
  selectedGender?: {
    id: number;
    name: string;
  };
};
