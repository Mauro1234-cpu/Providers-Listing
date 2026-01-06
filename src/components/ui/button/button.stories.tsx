import type { Meta, StoryObj } from "@storybook/react-vite";

import { Icons } from "@/components";
import { Button, type ButtonProps } from "./button";

const sizes: ButtonProps["size"][] = ["default", "icon", "lg", "sm"];
const variants: ButtonProps["variant"][] = [
  "primary",
  "secondary",
  "tertiary",
  "outlined",
  "elevated",
  "plainText",
];

const meta: Meta<typeof Button> = {
  args: { children: "Button" },
  argTypes: {
    disabled: { control: { type: "boolean" } },
    size: { control: { type: "select" }, options: sizes },
    variant: { control: { type: "select" }, options: variants },
  },
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Components/UI/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: ({ children, ...props }) => {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {variants.map((variant) => {
          return (
            <div className="flex flex-col gap-4" key={variant}>
              <h2 className="text-lg font-bold capitalize">{variant}</h2>

              {sizes.map((size) => {
                return (
                  <div className="grid grid-cols-2 gap-2" key={size}>
                    <div className="flex items-center gap-2">
                      <p className="font-medium uppercase">{size}</p>

                      <Button {...props} size={size} variant={variant}>
                        {size === "icon" ? <Icons.Home /> : children}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: ({ children, ...props }) => {
    return (
      <div className="grid grid-cols-3 gap-10">
        {variants.map((variant) => {
          return (
            <div className="flex flex-col gap-4" key={variant}>
              <h2 className="text-lg font-bold capitalize">{variant}</h2>

              {sizes.map((size) => {
                return (
                  <div className="grid grid-cols-2 gap-4" key={size}>
                    <div className="flex items-center gap-2">
                      <p className="font-medium uppercase">{size}</p>

                      <Button {...props} size={size} variant={variant} disabled>
                        {size === "icon" ? <Icons.Home /> : children}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  },
};

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  render: ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>;
  },
};
