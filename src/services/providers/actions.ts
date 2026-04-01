import { useProvidersInfinite } from "@/hooks/use-providers-infinite";
import type { RequestParams } from "../types";
import type { ProviderRequestFilters } from "./types";

export const useProvidersQuery = (params: RequestParams<ProviderRequestFilters>) => {
  return useProvidersInfinite(params);
};
