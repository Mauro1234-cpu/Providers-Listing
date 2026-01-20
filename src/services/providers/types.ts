import type z from "zod";

import type { ProviderProps } from "@/types/cards";
import type { RequestParams } from "../types";
import type { getProviderSchema } from "./schemas";

export type User = z.infer<ReturnType<typeof getProviderSchema>>;

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
