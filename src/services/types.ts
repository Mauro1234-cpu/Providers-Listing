import type { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";

type QueryKey = {
  queryKey: readonly unknown[];
  queryFn: (...args: never) => unknown;
};

type QueryFnReturnType<T> = T extends (...args: never) => QueryKey
  ? Awaited<ReturnType<ReturnType<T>["queryFn"]>>
  : T extends QueryKey
    ? Awaited<ReturnType<T["queryFn"]>>
    : never;

type QueryKeyReturnType<T> = T extends (...args: never) => QueryKey
  ? ReturnType<T>["queryKey"]
  : T extends QueryKey
    ? T["queryKey"]
    : never;

export type UseQueryProps<T extends ((...args: never) => QueryKey) | QueryKey> = Omit<
  UseQueryOptions<QueryFnReturnType<T>, unknown, QueryFnReturnType<T>, QueryKeyReturnType<T>>,
  "queryFn" | "queryKey"
>;

export type UseMutationProps<T extends (...args: never) => unknown> = Omit<
  UseMutationOptions<Awaited<ReturnType<T>>, unknown, Parameters<T>[0]>,
  "mutationFn"
>;

export type RequestParams<T> = {
  page?: number;
  filter?: T;
};
