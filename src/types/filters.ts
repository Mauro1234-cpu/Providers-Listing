import type z from "zod";

import type { providerSearchSchema } from "@/services/providers/schemas";

export type ProviderFiltersQuery = NonNullable<ProviderSearch>;
export type ProviderSearch = z.infer<typeof providerSearchSchema>;
export type UpdateFilters = (filters: Partial<ProviderFiltersQuery>) => void;

export type Option = {
  id: number;
  name: string;
};

export type FiltersHeaderProps = {
  title: string;
  desc: string;
  placeholder: string;
  filters: ProviderSearch;
  countProviders: number | null;
  textCount: string;
  favoritesFound: number | undefined;
  updateFilters: UpdateFilters;
};

export type ProviderFiltersUI = {
  specialty: Option | null;
  clinic: Option | null;
  gender: string;
  name: string;
  favorited: boolean | null;
};

export type SelectedFilters = {
  selectedClinic?: Option;
  selectedSpecialty?: Option;
  selectedGender?: Option;
  selectedFavorited: boolean | undefined;
};
