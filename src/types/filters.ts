import type { clinics, genders, specialties } from "@/constants/filter-groups";

export type FiltersHeaderProps = {
  title: string;
  desc: string;
  placeholder: string;
  textCount: string;
};

export type FilterState = {
  Specialty: (typeof specialties.options)[number] | "";
  Gender: (typeof genders.options)[number] | "";
  Clinic: (typeof clinics.options)[number] | "";
  search: string;
};
