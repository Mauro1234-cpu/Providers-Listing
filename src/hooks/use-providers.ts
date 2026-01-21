import { useProvidersQuery } from "@/services/providers/actions";
import type { providerQueryProps } from "@/services/providers/types";

export const useProviders = ({ params }: providerQueryProps) => {
  return useProvidersQuery({ params });
};
