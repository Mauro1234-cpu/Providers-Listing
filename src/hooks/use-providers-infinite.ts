import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

import { queries } from "@/services/providers/factories";
import type { ProviderRequestFilters, ProvidersResponse } from "@/services/providers/types";
import type { RequestParams } from "@/services/types";

export const useProvidersInfinite = (params: RequestParams<ProviderRequestFilters>) => {
  const { data, error, fetchNextPage, hasNextPage, isError, isLoading, status } = useInfiniteQuery<
    ProvidersResponse,
    InfiniteData<ProvidersResponse>
  >({
    ...queries.list(params),
    initialPageParam: 1,
    getNextPageParam: (data) => {
      const { currentPage, lastPage: totalPages } = data.meta;

      if (currentPage && totalPages) {
        return currentPage < totalPages ? currentPage + 1 : undefined;
      }
    },
  });

  return { data, error, fetchNextPage, isLoading, isError, hasNextPage, status };
};
