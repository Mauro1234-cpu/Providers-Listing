import { useSearch } from "@tanstack/react-router";

import { Route } from "@/routes/_private/page";
import type { ProviderFiltersQuery } from "@/types/filters";

export const useProvidersFilters = () => {
  const filters = useSearch({ from: "/_private/" });
  const navigate = Route.useNavigate();

  const defaultFilters: ProviderFiltersQuery = {
    specialty: null,
    clinic: null,
    gender: null,
    name: null,
    favorited: null,
  };

  const updateFilters = (filters: Partial<ProviderFiltersQuery>) => {
    navigate({
      search: (prev) => {
        return {
          ...(prev ?? defaultFilters),
          ...filters,
        };
      },
      replace: true,
    });
  };

  return { filters, updateFilters };
};
