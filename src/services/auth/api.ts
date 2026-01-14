import { publicApi } from "@/config/api";
import type { LoginPayload, LoginResponse, ServiceResponse } from "./types";

export const login = ({ email, password }: LoginPayload) => {
  return publicApi.post<ServiceResponse<LoginResponse>>("auth/login", { email, password });
};
