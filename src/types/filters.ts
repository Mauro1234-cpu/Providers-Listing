import type { clinics, genders, specialties } from "@/constants/filter-groups";
import type { ProviderFilters } from "@/services/providers/types";

export type FiltersHeaderProps = {
  title: string;
  desc: string;
  placeholder: string;
  filters: ProviderFilters;
  countProviders: number;
  textCount: string;
  setFilters: React.Dispatch<React.SetStateAction<ProviderFilters>>;
};

export type FilterState = {
  specialty: (typeof specialties)[number] | "";
  gender: (typeof genders)[number] | "";
  clinic: (typeof clinics)[number] | "";
  search: string;
  favorited: boolean;
};
