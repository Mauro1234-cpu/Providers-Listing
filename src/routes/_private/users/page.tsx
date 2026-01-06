import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { Button, DataTable, Icons } from "@/components";
import { DEFAULT_PAGE_SIZE } from "@/constants";
import {
  paginationValidationWithDefaults,
  searchTextValidation,
  useDebounce,
  usePagination,
  useSearchText,
} from "@/hooks";
import { USER_FILTER_KEYS, useUsers } from "@/services";
import { CreateUserDialog } from "./-components";
import { useUsersTable } from "./-hooks";

const UsersPage = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const {
    actions: { changePage },
    page,
    pageIndex,
  } = usePagination(Route.id);

  const { searchText } = useSearchText(Route.id);

  const debouncedSearchText = useDebounce(searchText, 500);

  const { t } = useTranslation();

  const {
    data: usersListData,
    isLoading,
    isSuccess,
  } = useUsers({
    filter: {
      [USER_FILTER_KEYS.EMAIL]: debouncedSearchText,
    },
    page,
  });

  const lastPage = usersListData?.meta?.lastPage;
  const pageSize = usersListData?.meta?.perPage ?? DEFAULT_PAGE_SIZE;
  const totalItems = usersListData?.meta?.total ?? 0;

  useEffect(() => {
    if (isSuccess && lastPage && page > lastPage) {
      changePage({ pageIndex: lastPage - 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePage, isSuccess]);

  const table = useUsersTable({
    data: usersListData?.data ?? [],
    state: { pagination: { pageIndex, pageSize } },
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        changePage(updater({ pageIndex, pageSize }));
      }
    },
    pageCount: lastPage,
    meta: { totalItems },
  });

  return (
    <>
      <CreateUserDialog isOpen={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen} />

      <div className="flex flex-col gap-y-2">
        <h1>{t("users.title")}</h1>

        <DataTable
          actions={
            <Button
              onClick={() => {
                return setIsCreateDialogOpen(true);
              }}
              variant="elevated"
            >
              <Icons.Plus />

              {t("users.create.title")}
            </Button>
          }
          inputPlaceholder={t("users.table.columns.actions.filterByEmail")}
          isLoading={isLoading}
          path={Route.id}
          table={table}
          withColumnVisibility
          withSearch
        />
      </div>
    </>
  );
};

export const Route = createFileRoute("/_private/users/")({
  component: UsersPage,
  validateSearch: z.object({
    ...searchTextValidation.shape,
    ...paginationValidationWithDefaults.shape,
  }),
});
