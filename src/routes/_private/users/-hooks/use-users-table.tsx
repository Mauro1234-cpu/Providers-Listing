import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { createColumnHelper } from "@tanstack/react-table";

import { useTable, type UseTableProps } from "@/components";
import type { User } from "@/services";
import { UserRowActions } from "../-components";

export const useUsersTable = ({ data = [], ...props }: Omit<UseTableProps<User>, "columns">) => {
  const { t } = useTranslation();

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<User>();

    return [
      columnHelper.accessor("id", {
        meta: { stringifiedHeader: t("users.table.columns.id") },
        header: t("users.table.columns.id"),
      }),
      columnHelper.accessor("emailAddress", {
        meta: { stringifiedHeader: t("users.table.columns.email") },
        header: t("users.table.columns.email"),
      }),
      columnHelper.accessor("name", {
        meta: { stringifiedHeader: t("users.table.columns.name") },
        header: t("users.table.columns.name"),
      }),
      columnHelper.display({
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          return <UserRowActions row={row} />;
        },
      }),
    ];
  }, [t]);

  return useTable({ columns, data, ...props });
};
