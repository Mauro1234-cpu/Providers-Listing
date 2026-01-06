import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "./label";

const meta: Meta<typeof Label> = {
  args: { children: "Label" },
  component: Label,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Components/UI/Label",
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <Label {...props} />;
  },
};
