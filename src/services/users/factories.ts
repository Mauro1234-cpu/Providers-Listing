import { createQueryKeys } from "@lukemorales/query-key-factory";

import { createUser, deleteUser, getUser, getUsers, updateUser } from "./api";
import type { User } from "./types";

export const queries = createQueryKeys("users", {
  detail: (id: User["id"]) => {
    return {
      queryKey: [id],
      queryFn: () => {
        return getUser(id);
      },
    };
  },
  list: (params) => {
    return {
      queryKey: [params],
      queryFn: () => {
        return getUsers(params);
      },
    };
  },
});

export const mutations = {
  create: createUser,
  delete: deleteUser,
  update: updateUser,
};
