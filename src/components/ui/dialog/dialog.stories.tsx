import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components";
import { Dialog } from "./dialog";

const meta: Meta<typeof Dialog.Root> = {
  component: Dialog.Root,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Components/UI/Dialog",
} satisfies Meta<typeof Dialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Dialog.Trigger asChild>
          <Button>Trigger dialog</Button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Are you sure you want to do this action?</Dialog.Title>

            <Dialog.Description>You will lose your progress.</Dialog.Description>
          </Dialog.Header>

          <Dialog.Footer className="flex items-center justify-end gap-2">
            <Dialog.Close asChild>
              <Button variant="outlined">No</Button>
            </Dialog.Close>

            <Button
              onClick={() => {
                return setOpen(false);
              }}
            >
              Yes
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    );
  },
};

export const RequiredDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Dialog.Trigger asChild>
          <Button>Trigger required dialog</Button>
        </Dialog.Trigger>

        <Dialog.Content isDismissible={false}>
          <Dialog.Header>
            <Dialog.Title>Are you sure you want to do this action?</Dialog.Title>

            <Dialog.Description>{`You can't close without responding.`}</Dialog.Description>
          </Dialog.Header>

          <Dialog.Footer className="flex items-center justify-end gap-2">
            <Dialog.Close asChild>
              <Button variant="outlined">Cancel</Button>
            </Dialog.Close>

            <Button
              onClick={() => {
                return setOpen(false);
              }}
            >
              Confirm
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    );
  },
};
