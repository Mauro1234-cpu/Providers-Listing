import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "@/components";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  args: {},
  argTypes: {
    disabled: { control: { type: "boolean" } },
    checked: { control: { type: "boolean" } },
  },
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Components/UI/Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <Checkbox id="checkboxId" {...props} />;
  },
};

export const DefaultWithLabel: Story = {
  render: (props) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" {...props} />

        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    );
  },
};

export const DefaultWithLabelAndText: Story = {
  render: (props) => {
    return (
      <div className="flex items-start space-x-2">
        <Checkbox id="terms" {...props} />

        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="terms">Accept terms and conditions</Label>

          <p className="text-sm">You agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (props) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" {...props} disabled />

        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    );
  },
};
