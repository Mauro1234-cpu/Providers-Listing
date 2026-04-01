import { publicApi } from "@/config/api";
import type { LoginPayload, LoginResponse, RegisterPayload, ServiceResponse } from "./types";

export const login = (payload: LoginPayload) => {
  return publicApi.post<ServiceResponse<LoginResponse>>("auth/login", payload);
};

export const register = (payload: RegisterPayload) => {
  return publicApi.post<ServiceResponse<void>>("auth/signup", payload);
};
