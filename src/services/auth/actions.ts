import { useMutation } from "@tanstack/react-query";

import type { UseMutationProps } from "@/services/types";
import { mutations } from "./factories";

export const useLogin = (props?: UseMutationProps<typeof mutations.login>) => {
  return useMutation({
    mutationFn: mutations.login,
    onError: () => {
      // eslint-disable-next-line no-console
      console.log("Error :(");
    },
    ...props,
  });
};

export const useRegister = (props?: UseMutationProps<typeof mutations.register>) => {
  return useMutation({
    mutationFn: mutations.register,
    onError: () => {
      // eslint-disable-next-line no-console
      console.log("Error :(");
    },
    ...props,
  });
};
