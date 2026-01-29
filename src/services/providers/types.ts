import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import type z from "zod";

import type { ProviderProps } from "@/types/cards";
import type { RequestParams } from "../types";
import type { providerSchema } from "./schemas";

export type User = z.infer<ReturnType<typeof providerSchema>>;

export type ProviderFilterKey = "clinic_id" | "specialty_id" | "gender" | "name" | "favorited";

export type ProviderFilters = {
  clinic: number | null;
  specialty: number | null;
  gender: number | null;
  name: string;
  favorited: boolean | null;
};

export type ProviderRequestFilters = {
  clinic_id?: number;
  specialty_id?: number;
  gender?: number;
  name?: string;
  favorited?: boolean;
  pageParam?: number;
};
export type ProviderRequestParams = RequestParams<Record<ProviderFilterKey, number | null>>;

export type ProvidersQueryState = {
  providers: ProviderProps[];
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<
    InfiniteQueryObserverResult<InfiniteData<ProvidersResponse>, InfiniteData<ProvidersResponse>>
  >;
  hasNextPage: boolean;
  isLoading: boolean;
  isError: boolean;
};

export type ProvidersResponse = {
  meta: {
    lastPage: number | null;
    currentPage: number | null;
    links?: {
      url: string | null;
      label: string | null;
      page: number | null;
      active: boolean;
    };
    perPage: number | null;
    total: number | null;
  };
  data: {
    id: number;
    name: string;
    email: string;
    phone: string;
    gender: "male" | "female" | "other";
    about: string | null;
    languages: string[] | null;
    profilePic: string | null;
    specialty: {
      id: number;
      name: string;
    };
    clinics: {
      id: number;
      name: string;
      address: string | null;
      city: string | null;
      state: string | null;
      zipCode: string | null;
      phone: string | null;
    }[];
    isFavorited: boolean;
  }[];
};
