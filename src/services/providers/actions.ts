import { useQuery } from "@tanstack/react-query";

import { queries } from "./factories";
import type { providerQueryProps } from "./types";

export const useProvidersQuery = ({ params, props }: providerQueryProps = {}) => {
  return useQuery({ ...queries.list(params), ...props });
};
