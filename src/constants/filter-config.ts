import type { FilterState } from "@/types/filters";
import { clinics, genders, specialties } from "./filter-groups";

export const filterConfig: {
  key: keyof FilterState;
  data: {
    options: string[];
  };
}[] = [
  { key: "Specialty", data: specialties },
  { key: "Gender", data: genders },
  { key: "Clinic", data: clinics },
];
