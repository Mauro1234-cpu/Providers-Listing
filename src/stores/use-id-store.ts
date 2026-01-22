import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type IdStoreState = {
  id: number | null;
};

export const useIdStore = create<IdStoreState>()(
  persist(
    (_) => {
      return { id: null };
    },
    { name: "id" },
  ),
);

export const getIdStoreState = () => {
  return useIdStore.getState();
};

export const useUserStoreId = () => {
  return useIdStore((s) => {
    return s.id;
  });
};

export const setIdStore = (token: string) => {
  if (!token) {
    useIdStore.setState({ id: null });

    return;
  }

  const decoded = jwtDecode<{ sub?: number }>(token);

  return useIdStore.setState({ id: decoded.sub ?? null });
};
