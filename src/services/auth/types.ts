import type { z } from "zod";

import type {
  getLoginPayloadSchema,
  getRegisterPayloadSchema,
  loginResponseSchema,
  registerResponseSchema,
} from "./schemas";

export type ServiceResponse<T> = {
  data: T;
};

export type LoginPayload = z.infer<ReturnType<typeof getLoginPayloadSchema>>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;

export type RegisterPayload = z.infer<ReturnType<typeof getRegisterPayloadSchema>>;
export type RegisterResponse = z.infer<typeof registerResponseSchema>;
