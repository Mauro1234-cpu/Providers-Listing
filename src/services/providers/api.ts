import z from "zod";

import { privateApi } from "@/config/api";
import { getProviderSchema } from "./schemas";
import type { ProviderRequestParams } from "./types";

export const getProviders = async (params: ProviderRequestParams) => {
  const data = await privateApi.get("providers", { params });

  return (z.array(getProviderSchema()), data.data);
};
