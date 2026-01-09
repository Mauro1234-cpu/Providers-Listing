import type { z } from "zod";

import type { getLoginPayloadSchema, loginResponseSchema } from "./schemas";

export type ServiceResponse<T> = {
  data: T;
};

export type LoginPayload = z.infer<ReturnType<typeof getLoginPayloadSchema>>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
