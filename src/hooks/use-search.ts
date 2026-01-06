import { useMemo } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { z } from "zod";

import type { AvailableRoutesId } from "@/config/router";
import { usePagination } from "./use-pagination";

export const searchTextValidation = z.object({
  searchText: z.string().optional(),
});

export const useSearchText = (path: AvailableRoutesId) => {
  const { useNavigate, useSearch } = getRouteApi(path);

  const search = useSearch();
  const navigate = useNavigate();

  const { searchText } = useMemo(() => {
    return searchTextValidation.parse(search);
  }, [search]);

  const {
    actions: { resetPage },
  } = usePagination(path);

  const setSearchText = (text: string) => {
    navigate({
      search: (prev) => {
        return { ...prev, searchText: text ? text : undefined };
      },
    });
  };

  const setPaginatedSearchText = (text: string) => {
    setSearchText(text);
    resetPage();
  };

  return {
    actions: { setPaginatedSearchText, setSearchText },
    searchText,
  };
};
