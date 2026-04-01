import { createQueryKeys } from "@lukemorales/query-key-factory";

import { fetchProviders } from "./api";

type queriesProps = {
  pageParam: number | undefined;
};

export const queries = createQueryKeys("providers", {
  list: (params) => {
    return {
      queryKey: ["providers", params],
      queryFn: ({ pageParam }: queriesProps) => {
        return fetchProviders({
          ...params,
          page: pageParam,
        });
      },
    };
  },
});
