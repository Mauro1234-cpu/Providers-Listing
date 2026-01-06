import { deepSnakeKeys } from "string-ts";
import { z } from "zod";

import { publicApi } from "@/config/api";
import { parsePaginatedResponse } from "@/services/schemas";
import { getUserSchema } from "./schemas";
import type { CreateUser, UpdateUser, User, UserRequestParams } from "./types";

export const getUser = async (id: User["id"]) => {
  const response = await publicApi.get(`users/${id}`);

  return getUserSchema().parse(response.data);
};

export const getUsers = async (params: UserRequestParams) => {
  const response = await publicApi.get("users", { params });

  return parsePaginatedResponse(z.array(getUserSchema()), response.data);
};

export const deleteUser = async (id: User["id"]) => {
  return publicApi.delete(`users/${id}`);
};

export const createUser = async (data: CreateUser) => {
  return publicApi.post("users", deepSnakeKeys(data));
};

export const updateUser = async ({ id, ...payload }: UpdateUser) => {
  return publicApi.put(`users/${id}`, deepSnakeKeys(payload));
};
