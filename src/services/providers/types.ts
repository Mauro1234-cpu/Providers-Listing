import type z from "zod";

import type { RequestParams, UseQueryProps } from "../types";
import type { queries } from "./factories";
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
};
export type ProviderRequestParams = RequestParams<Record<ProviderFilterKey, number | null>>;

export type providerQueryProps = {
  params?: RequestParams<ProviderRequestFilters>;
  props?: UseQueryProps<typeof queries.list>;
  pageParam?: number;
};

export type ProvidersQueryState = {
  data?: ProvidersResponse;
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
