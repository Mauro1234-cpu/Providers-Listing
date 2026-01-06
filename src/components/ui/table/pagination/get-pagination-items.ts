export const PAGINATION_ITEM_TYPE = {
  PAGE_BUTTON: "pageButton",
  ELLIPSIS: "ellipsis",
} as const;

type BuildArgs = {
  currentPage: number;
  totalPages: number;
};

const TOTAL_VISIBLE_BUTTONS = 5;
const FIRST_PAGE = 1;
const FIXED_BUTTONS = 2;
const MIDDLE_VISIBLE_BUTTONS = TOTAL_VISIBLE_BUTTONS - FIXED_BUTTONS;

const range = (from: number, to: number) => {
  return Array.from({ length: to - from + 1 }, (_, i) => {
    return from + i;
  });
};

const pageButton = (index: number) => {
  return { type: PAGINATION_ITEM_TYPE.PAGE_BUTTON, index };
};

export const getPaginationItems = ({ currentPage, totalPages }: BuildArgs) => {
  if (totalPages <= TOTAL_VISIBLE_BUTTONS) {
    const pageItems = range(1, totalPages).map(pageButton);

    return pageItems;
  }

  const lastPage = totalPages;
  const nearStartEdge = currentPage <= MIDDLE_VISIBLE_BUTTONS + 1;
  const nearEndEdge = currentPage >= lastPage - MIDDLE_VISIBLE_BUTTONS;

  const leftEllipsis = nearStartEdge ? [] : ([{ type: PAGINATION_ITEM_TYPE.ELLIPSIS }] as const);
  const rightEllipsis =
    nearEndEdge && !nearStartEdge ? [] : ([{ type: PAGINATION_ITEM_TYPE.ELLIPSIS }] as const);

  const middlePages = () => {
    if (nearStartEdge) {
      return range(FIRST_PAGE + 1, FIRST_PAGE + MIDDLE_VISIBLE_BUTTONS).map(pageButton);
    }
    if (nearEndEdge) {
      return range(lastPage - MIDDLE_VISIBLE_BUTTONS, lastPage - 1).map(pageButton);
    }

    return [currentPage - 1, currentPage, currentPage + 1].map(pageButton);
  };

  return [
    pageButton(FIRST_PAGE),
    ...leftEllipsis,
    ...middlePages(),
    ...rightEllipsis,
    pageButton(lastPage),
  ];
};
