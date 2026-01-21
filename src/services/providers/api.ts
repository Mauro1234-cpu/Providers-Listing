import z from "zod";

import { privateApi } from "@/config/api";
import { sleep } from "@/routes/(public)/_guest/login/-components";
import { paginatedResponse } from "./schemas";
import type { ProviderRequestParams } from "./types";

export const getProviders = async (params: ProviderRequestParams) => {
  await sleep(2000);
  const data = await privateApi.get("providers", { params });

  return (z.array(paginatedResponse()), data.data);
};
