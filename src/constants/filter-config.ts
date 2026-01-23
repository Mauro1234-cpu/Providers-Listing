import type { FilterState } from "@/types/filters";
import { clinics, genders, specialties } from "./filter-groups";

export const filterConfig: {
  key: keyof FilterState;
  data: {
    id: number;
    name: string;
  }[];
}[] = [
  { key: "specialty", data: specialties },
  { key: "gender", data: genders },
  { key: "clinic", data: clinics },
];
