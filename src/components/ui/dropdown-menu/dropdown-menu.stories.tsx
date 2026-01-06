import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components";
import { DropdownMenu } from "./dropdown-menu";

const meta: Meta<typeof DropdownMenu.Root> = {
  args: { children: "Dropdown" },
  component: DropdownMenu.Root,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Components/UI/DropdownMenu",
} satisfies Meta<typeof DropdownMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button className="ml-auto" variant="outlined">
            Open dropdown
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content align="end">
          {[
            { label: "option 1", checked: false },
            { label: "option 2", checked: true },
            { label: "option 3", checked: false },
          ].map((option) => {
            return (
              <DropdownMenu.CheckboxItem
                checked={option.checked}
                className="capitalize"
                key={option.label}
              >
                {option.label}
              </DropdownMenu.CheckboxItem>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  },
};
