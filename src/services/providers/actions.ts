import { useQuery } from "@tanstack/react-query";

import type { RequestParams, UseQueryProps } from "../types";
import { queries } from "./factories";
import type { ProviderFilterKey } from "./types";

export type providerQueryProps = {
  params: RequestParams<Record<ProviderFilterKey, number | undefined>>;
  props?: UseQueryProps<typeof queries.list>;
};

export const useProvidersQuery = ({ params, props }: providerQueryProps) => {
  return useQuery({ ...queries.list(params), ...props });
};
