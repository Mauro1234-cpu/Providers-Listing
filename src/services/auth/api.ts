import { publicApi } from "@/config/api";
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
  ServiceResponse,
} from "./types";

export const login = ({ email, password }: LoginPayload) => {
  return publicApi.post<ServiceResponse<LoginResponse>>("auth/login", { email, password });
};

export const register = ({ email, name, password, password_confirmation }: RegisterPayload) => {
  return publicApi.post<ServiceResponse<RegisterResponse>>("auth/signup", {
    name,
    email,
    password,
    password_confirmation,
  });
};
