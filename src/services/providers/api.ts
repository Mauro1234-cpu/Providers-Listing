import { deepCamelKeys } from "string-ts";
import z from "zod";

import { privateApi } from "@/config/api";
import { parsePaginatedResponse } from "../schemas";
import { providerSchema } from "./schemas";
import type { ProviderRequestParams } from "./types";

export const fetchProviders = async (params: ProviderRequestParams) => {
  const data = await privateApi.get("providers", { params });

  return parsePaginatedResponse(z.array(providerSchema()), deepCamelKeys(data.data));
};
