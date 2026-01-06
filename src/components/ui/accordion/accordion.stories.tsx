import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion } from "./accordion";

const meta = {
  component: Accordion.Root,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  title: "Components/UI/Accordion",
} satisfies Meta<ComponentProps<typeof Accordion.Root>>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { header: "Header one", value: "1" },
  { header: "Header two", value: "2" },
  { header: "Header three", value: "3" },
];

export const Single: Story = {
  args: {
    type: "single",
    collapsible: true,
    className: "mx-auto max-w-md",
  },
  render: (args) => {
    return (
      <Accordion.Root {...args}>
        {items.map((item) => {
          return (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.Header>
                <Accordion.Trigger>{item.header}</Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="py-4">
                This is the accordion content. You can place any content here such as text, lists,
                or even other components.
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    );
  },
};

export const Multiple: Story = {
  args: {
    type: "multiple",
    className: "mx-auto max-w-md",
  },
  render: (args) => {
    return (
      <Accordion.Root {...args}>
        {items.map((item) => {
          return (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.Header>
                <Accordion.Trigger>{item.header}</Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="py-4">
                This is the accordion content. You can place any content here such as text, lists,
                or even other components.
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    );
  },
};

export const DefaultValue: Story = {
  args: {
    className: "mx-auto max-w-md",
    defaultValue: "2",
    type: "single",
  },
  render: (args) => {
    return (
      <Accordion.Root {...args}>
        {items.map((item) => {
          return (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.Header>
                <Accordion.Trigger>{item.header}</Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="py-4">
                This is the accordion content. You can place any content here such as text, lists,
                or even other components.
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    );
  },
};
