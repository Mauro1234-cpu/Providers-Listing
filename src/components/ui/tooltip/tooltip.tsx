import type { ComponentProps } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { tv } from "tailwind-variants";

const tooltipVariants = tv({
  slots: {
    content:
      "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md bg-background-brand-default px-3 py-1.5 text-xs text-balance text-text-brand-on-brand animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    arrow:
      "rounded-0.5 z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 bg-background-brand-default fill-background-brand-default",
  },
});

const { arrow, content } = tooltipVariants();

export const TooltipProvider = ({
  delayDuration = 0,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Provider>) => {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
};

const Root = (props: ComponentProps<typeof TooltipPrimitive.Root>) => {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
};

const Trigger = (props: ComponentProps<typeof TooltipPrimitive.Trigger>) => {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
};

const Content = ({
  children,
  className,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Content>) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={content({ className })}
        data-slot="tooltip-content"
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={arrow({ className })} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
};

export const Tooltip = { Root, Trigger, Content };
