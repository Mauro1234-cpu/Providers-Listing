import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type { RequestParams, UseMutationProps, UseQueryProps } from "@/services/types";
import { mutations, queries } from "./factories";
import type { User, UserFilterKey } from "./types";

export const useUser = (id: User["id"], props?: UseQueryProps<typeof queries.detail>) => {
  return useQuery({ ...queries.detail(id), ...props });
};

export const useUsers = (
  params: RequestParams<Record<UserFilterKey, string | undefined>>,
  props?: UseQueryProps<typeof queries.list>,
) => {
  return useQuery({ ...queries.list(params), ...props });
};

export const useDeleteUser = (props?: UseMutationProps<typeof mutations.delete>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mutations.delete,
    ...props,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: queries.list._def });
      props?.onSuccess?.(...args);
    },
  });
};

export const useCreateUser = (props?: UseMutationProps<typeof mutations.create>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mutations.create,
    ...props,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: queries.list._def });
      props?.onSuccess?.(...args);
    },
  });
};

export const useUpdateUser = (props?: UseMutationProps<typeof mutations.update>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mutations.update,
    ...props,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: queries.list._def });
      props?.onSuccess?.(...args);
    },
  });
};
