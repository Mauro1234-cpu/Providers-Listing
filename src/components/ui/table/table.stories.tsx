import type { Meta, StoryObj } from "@storybook/react-vite";
import { createColumnHelper, flexRender } from "@tanstack/react-table";

import { Table, useTable } from "./table";

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Components/UI/Table",
} satisfies Meta<typeof Table.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

const MOCK_DATA: Person[] = [
  // cspell: disable
  { firstName: "Andreane", lastName: "Nicolas", age: 6 },
  { firstName: "Easter", lastName: "Gleichner", age: 11 },
  { firstName: "Nova", lastName: "Dibbert", age: 22 },
  { firstName: "Jairo", lastName: "Beer", age: 25 },
  { firstName: "Emelia", lastName: "Cole", age: 31 },
  { firstName: "Mylene", lastName: "Kessler", age: 7 },
  { firstName: "Jeffry", lastName: "Abshire", age: 24 },
  // cspell: enable
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", { header: "First Name" }),
  columnHelper.accessor("lastName", { header: "Last Name" }),
  columnHelper.accessor("age", { header: "Age" }),
];

export const Default: Story = {
  render: () => {
    const table = useTable({ data: MOCK_DATA, columns });

    return (
      <Table.Root>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Table.Head key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </Table.Head>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Header>

        <Table.Body>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <Table.Row key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Table.Cell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </Table.Cell>
                    );
                  })}
                </Table.Row>
              );
            })
          ) : (
            <Table.Row>
              <Table.Cell className="h-24 text-center" colSpan={table.getAllColumns().length}>
                No results
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    );
  },
};
