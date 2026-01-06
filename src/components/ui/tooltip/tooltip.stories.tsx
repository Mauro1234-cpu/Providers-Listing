import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tooltip, TooltipProvider } from "./tooltip";

const meta: Meta<typeof Tooltip.Root> = {
  component: Tooltip.Root,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  title: "Components/UI/Tooltip",
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      );
    },
  ],
} satisfies Meta<typeof Tooltip.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const positions = ["top", "right", "bottom", "left"] as const;

export const Default: Story = {
  render: () => {
    return (
      <Tooltip.Root>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>

        <Tooltip.Content>
          <p>Tooltip content</p>
        </Tooltip.Content>
      </Tooltip.Root>
    );
  },
};

export const Positions: Story = {
  render: () => {
    return (
      <div className="flex items-center gap-4">
        {positions.map((position) => {
          return (
            <Tooltip.Root key={position}>
              <Tooltip.Trigger className="capitalize">{position}</Tooltip.Trigger>

              <Tooltip.Content side={position}>
                <p className="capitalize">{`${position} content`}</p>
              </Tooltip.Content>
            </Tooltip.Root>
          );
        })}
      </div>
    );
  },
};
