import type { clinics, genders, specialties } from "@/constants/filter-groups";

export type FiltersHeaderProps = {
  title: string;
  desc: string;
  placeholder: string;
  filters: FilterState;
  countProviders: number;
  textCount: string;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};

export type FilterState = {
  Specialty: (typeof specialties.options)[number] | "";
  Gender: (typeof genders.options)[number] | "";
  Clinic: (typeof clinics.options)[number] | "";
  search: string;
};
