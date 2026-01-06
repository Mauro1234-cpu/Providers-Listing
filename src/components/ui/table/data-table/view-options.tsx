import { useTranslation } from "react-i18next";
import type { Column, Table } from "@tanstack/react-table";

import { Button, DropdownMenu, Icons } from "@/components";

type ViewOptionsProps<T> = {
  table: Table<T>;
};

export const ViewOptions = <T,>({ table }: ViewOptionsProps<T>) => {
  const { t } = useTranslation();

  const columns = table.getAllLeafColumns();

  const hidableColumns = columns.filter((column: Column<T, unknown>) => {
    return column.getCanHide();
  });

  const visibleColumns = columns.filter((column: Column<T, unknown>) => {
    return column.getIsVisible() && typeof column.columnDef.header === "string";
  });

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="sm:ml-auto" variant="elevated">
          {t("table.filters.columns")} <Icons.ChevronDown />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end">
        {hidableColumns.map((column) => {
          const isLastColumnVisible = visibleColumns.length === 1 && column.getIsVisible();

          return (
            <DropdownMenu.CheckboxItem
              checked={column.getIsVisible()}
              className="capitalize"
              disabled={isLastColumnVisible}
              key={column.id}
              onCheckedChange={(value) => {
                return column.toggleVisibility(!!value);
              }}
            >
              {column.columnDef.meta?.stringifiedHeader || column.id}
            </DropdownMenu.CheckboxItem>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
