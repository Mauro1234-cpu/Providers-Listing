import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";

import { Button } from "@/components";
import { Toaster } from "./toast";

const meta: Meta<typeof Toaster> = {
  component: Toaster,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Components/UI/Toast",
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

const toastTypes = ["error", "info", "loading", "message", "success", "warning"];

type ToastTypes = (typeof toastTypes)[number];

export const Default: Story = {
  render: () => {
    return (
      <>
        <Toaster />

        <Button
          onClick={() => {
            return toast("Toast!!!");
          }}
        >
          Show toast
        </Button>
      </>
    );
  },
};

export const All: Story = {
  render: () => {
    const showToast = (type: ToastTypes) => {
      const message = `${type} toast!`;

      switch (type) {
        case "error": {
          toast.error(message);
          break;
        }

        case "info": {
          toast.info(message);
          break;
        }

        case "loading": {
          toast.loading(message);
          break;
        }

        case "message": {
          toast.message(message);
          break;
        }

        case "success": {
          toast.success(message);
          break;
        }

        case "warning": {
          toast.warning(message);
          break;
        }
      }
    };

    return (
      <>
        <Toaster />

        <div className="flex flex-col gap-4">
          {toastTypes.map((toastType) => {
            return (
              <Button
                key={toastType}
                onClick={() => {
                  return showToast(toastType);
                }}
              >
                Show {toastType} toast
              </Button>
            );
          })}
        </div>
      </>
    );
  },
};
