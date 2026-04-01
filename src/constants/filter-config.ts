import type { ProviderFiltersUI } from "@/types/filters";
import { clinics, genders, specialties } from "./filter-groups";

export const filterConfig: {
  key: keyof ProviderFiltersUI;
  data: {
    id: number;
    name: string;
  }[];
}[] = [
  { key: "specialty", data: specialties },
  { key: "gender", data: genders },
  { key: "clinic", data: clinics },
];
