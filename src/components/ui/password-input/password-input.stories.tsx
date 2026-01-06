import type { Meta, StoryObj } from "@storybook/react-vite";

import { Icons } from "@/components";
import { SIZE } from "@/types/styles";
import { PasswordInput } from "./password-input";

const meta: Meta<typeof PasswordInput> = {
  args: { placeholder: "Enter your password..." },
  component: PasswordInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Components/UI/PasswordInput",
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props, { updateArgs }) => {
    return (
      <PasswordInput
        {...props}
        onChange={(e) => {
          return updateArgs({ value: e.target.value });
        }}
      />
    );
  },
};

export const WithIcon: Story = {
  render: (props, { updateArgs }) => {
    return (
      <PasswordInput
        {...props}
        left={<Icons.Lock />}
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

              <PasswordInput {...props} size={size} />
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

              <PasswordInput {...props} left={<Icons.Lock />} size={size} />
            </div>
          );
        })}
      </div>
    );
  },
};
