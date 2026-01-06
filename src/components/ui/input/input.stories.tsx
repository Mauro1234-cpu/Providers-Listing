import type { Meta, StoryObj } from "@storybook/react-vite";

import { Icons } from "@/components";
import { SIZE } from "@/types/styles";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  args: { placeholder: "Type your text here..." },
  argTypes: {
    disabled: { control: { type: "boolean" } },
    size: { control: { type: "select" }, options: Object.values(SIZE) },
  },
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Components/UI/Input",
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props, { updateArgs }) => {
    return (
      <Input
        {...props}
        onChange={(e) => {
          updateArgs({ value: e.target.value });
        }}
      />
    );
  },
};

export const WithIcon: Story = {
  render: (props, { updateArgs }) => {
    return (
      <Input
        {...props}
        left={<Icons.Search />}
        onChange={(e) => {
          updateArgs({ value: e.target.value });
        }}
      />
    );
  },
};

export const All: Story = {
  render: ({ ...props }) => {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {Object.values(SIZE).map((size) => {
          return (
            <div className="flex items-center gap-2" key={size}>
              <p className="font-medium uppercase">{size}</p>

              <Input {...props} size={size} />
            </div>
          );
        })}
      </div>
    );
  },
};

export const AllWithIcon: Story = {
  render: ({ ...props }) => {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {Object.values(SIZE).map((size) => {
          return (
            <div className="flex items-center gap-2" key={size}>
              <p className="font-medium uppercase">{size}</p>

              <Input {...props} left={<Icons.Search />} size={size} />
            </div>
          );
        })}
      </div>
    );
  },
};
