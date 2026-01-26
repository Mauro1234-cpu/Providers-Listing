import { useState } from "react";

import type { ProviderFilters } from "@/services/providers/types";

export const useProvidersFilters = () => {
  const [filters, setFilters] = useState<ProviderFilters>({
    specialty: null,
    gender: null,
    clinic: null,
    name: "",
    favorited: null,
  });

  return { filters, setFilters };
};
