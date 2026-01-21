import type z from "zod";

import type { ProviderProps } from "@/types/cards";
import type { RequestParams, UseQueryProps } from "../types";
import type { queries } from "./factories";
import type { providerSchema } from "./schemas";

export type User = z.infer<ReturnType<typeof providerSchema>>;

export type ProviderFilterKey = "clinic" | "specialty" | "gender";

export type ProviderFilters = Record<ProviderFilterKey, number>;

export type ProviderRequestParams = RequestParams<Record<ProviderFilterKey, number | undefined>>;

export type ProvidersResponse = {
  meta: {
    lastPage: number;
    perPage: number;
    total: number;
  };
  data: ProviderProps[];
};

export type providerQueryProps = {
  params?: RequestParams<Record<ProviderFilterKey, number | undefined>>;
  props?: UseQueryProps<typeof queries.list>;
};
