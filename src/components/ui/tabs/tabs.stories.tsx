import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs } from "./tabs";

const meta: Meta<typeof Tabs.Root> = {
  component: Tabs.Root,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  title: "Components/UI/Tabs",
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>

          <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>

          <Tabs.Trigger value="3">Tab 3</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="1">
          <p>Content for Tab 1</p>
        </Tabs.Content>

        <Tabs.Content value="2">
          <p>Content for Tab 2</p>
        </Tabs.Content>

        <Tabs.Content value="3">
          <p>Content for Tab 3</p>
        </Tabs.Content>
      </Tabs.Root>
    );
  },
};

export const DefaultValue: Story = {
  render: () => {
    return (
      <Tabs.Root defaultValue="2">
        <Tabs.List>
          <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>

          <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>

          <Tabs.Trigger value="3">Tab 3</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="1">
          <p>Content for Tab 1</p>
        </Tabs.Content>

        <Tabs.Content value="2">
          <p>Content for Tab 2</p>
        </Tabs.Content>

        <Tabs.Content value="3">
          <p>Content for Tab 3</p>
        </Tabs.Content>
      </Tabs.Root>
    );
  },
};
