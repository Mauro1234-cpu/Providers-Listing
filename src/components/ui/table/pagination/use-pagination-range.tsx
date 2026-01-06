import { useMemo } from "react";

import { getPaginationItems } from "./get-pagination-items";

type usePaginationRangeProps = {
  page: number;
  totalPages: number;
};

export const usePaginationRange = ({ page, totalPages }: usePaginationRangeProps) => {
  const items = useMemo(() => {
    return getPaginationItems({ currentPage: page, totalPages });
  }, [page, totalPages]);

  const isFirst = page === 1;
  const isLast = page === totalPages;

  return { items, isFirst, isLast };
};
