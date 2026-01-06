import type { z } from "zod";

import type { getLoginPayloadSchema, loginResponseSchema } from "./schemas";

export type LoginPayload = z.infer<ReturnType<typeof getLoginPayloadSchema>>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
