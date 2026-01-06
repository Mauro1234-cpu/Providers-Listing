import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components";
import { Card } from "./card";

const meta: Meta<typeof Card.Root> = {
  component: Card.Root,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Components/UI/Card",
} satisfies Meta<typeof Card.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Card.Root className="w-88">
        <Card.Header>
          <Card.Title>Card Title</Card.Title>

          <Card.Description>This is a short description of the card.</Card.Description>
        </Card.Header>

        <Card.Content>
          <p className="text-sm">
            This is the card content. You can place any content here such as text, lists, or even
            other components.
          </p>
        </Card.Content>

        <Card.Footer className="flex justify-between">
          <Button variant="outlined">Cancel</Button>

          <Button>Confirm</Button>
        </Card.Footer>
      </Card.Root>
    );
  },
};
