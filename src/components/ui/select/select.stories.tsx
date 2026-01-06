import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "./select";

const meta: Meta<typeof Select.Root> = {
  title: "Components/UI/Select",
  component: Select.Root,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select.Root>;

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes", disabled: true },
  { label: "Pineapple", value: "pineapple" },
];

export const Basic: Story = {
  render: () => {
    return (
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>

        <Select.Content>
          {options.map((opt) => {
            return (
              <Select.Item disabled={opt.disabled} key={opt.value} value={opt.value}>
                {opt.label}
              </Select.Item>
            );
          })}
        </Select.Content>
      </Select.Root>
    );
  },
};

export const WithLabelAndSeparator: Story = {
  render: () => {
    return (
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder="Pick an option" />
        </Select.Trigger>

        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>

            <Select.Item value="apple">Apple</Select.Item>

            <Select.Item value="banana">Banana</Select.Item>
          </Select.Group>

          <Select.Separator />

          <Select.Group>
            <Select.Label>Other</Select.Label>

            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("blueberry");

    return (
      <div className="space-y-2">
        <p>Selected: {value}</p>

        <Select.Root onValueChange={setValue} value={value}>
          <Select.Trigger>
            <Select.Value placeholder="Select a fruit" />
          </Select.Trigger>

          <Select.Content>
            {options.map((opt) => {
              return (
                <Select.Item disabled={opt.disabled} key={opt.value} value={opt.value}>
                  {opt.label}
                </Select.Item>
              );
            })}
          </Select.Content>
        </Select.Root>
      </div>
    );
  },
};
