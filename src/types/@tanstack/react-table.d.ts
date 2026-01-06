import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/consistent-type-definitions
  interface ColumnMeta<TData extends RowData, TValue> {
    stringifiedHeader?: string;
  }
  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/consistent-type-definitions
  interface TableMeta<TData extends RowData> {
    totalItems: number;
  }
}
