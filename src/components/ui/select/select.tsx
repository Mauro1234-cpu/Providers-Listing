import type { ComponentProps } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { tv } from "tailwind-variants";

import { Icons } from "../icons";

const selectVariants = tv({
  slots: {
    trigger:
      "flex w-fit cursor-pointer items-center justify-between gap-2 rounded-md border border-border-default-default bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-4 focus-visible:ring-background-brand-default/25 disabled:cursor-not-allowed data-[placeholder]:text-text-default-tertiary data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text-default-default",
    content:
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-border-default-default bg-background-default-default text-text-default-default shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    viewport: "p-1",
    label: "px-2 py-1.5 text-xs text-text-default-secondary",
    item: "relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-background-default-secondary focus:text-text-default-default data-[disabled]:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text-default-default *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
    separator: "pointer-events-none -mx-1 my-1 h-px bg-border-default-default",
    scrollButton: "flex cursor-default items-center justify-center py-1",
  },
  variants: {
    position: {
      popper: {
        content:
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        viewport:
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
      },
    },
  },
});

const { item, label, scrollButton, separator, trigger } = selectVariants();

const Root = ({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
};

const Trigger = ({
  children,
  className,
  size = "default",
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) => {
  return (
    <SelectPrimitive.Trigger
      className={trigger({ className })}
      data-size={size}
      data-slot="select-trigger"
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <Icons.ChevronDown className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

const Content = ({
  children,
  className,
  position = "popper",
  ...props
}: ComponentProps<typeof SelectPrimitive.Content> & {
  position?: "popper" | "item";
}) => {
  const { content: contentClass, viewport: viewportClass } = selectVariants({ position });

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={contentClass({ className })}
        data-slot="select-content"
        position={position}
        {...props}
      >
        <ScrollUpButton />
        <SelectPrimitive.Viewport className={viewportClass()}>{children}</SelectPrimitive.Viewport>
        <ScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

const Item = ({ children, className, ...props }: ComponentProps<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item className={item({ className })} data-slot="select-item" {...props}>
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Icons.Check className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

const Label = ({ className, ...props }: ComponentProps<typeof SelectPrimitive.Label>) => {
  return (
    <SelectPrimitive.Label className={label({ className })} data-slot="select-label" {...props} />
  );
};

const Separator = ({ className, ...props }: ComponentProps<typeof SelectPrimitive.Separator>) => {
  return (
    <SelectPrimitive.Separator
      className={separator({ className })}
      data-slot="select-separator"
      {...props}
    />
  );
};

const ScrollUpButton = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => {
  return (
    <SelectPrimitive.ScrollUpButton
      className={scrollButton({ className })}
      data-slot="select-scroll-up-button"
      {...props}
    >
      <Icons.ChevronUp className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
};

const ScrollDownButton = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownButton>) => {
  return (
    <SelectPrimitive.ScrollDownButton
      className={scrollButton({ className })}
      data-slot="select-scroll-down-button"
      {...props}
    >
      <Icons.ChevronDown className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
};

const Value = (props: ComponentProps<typeof SelectPrimitive.Value>) => {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
};

const Group = (props: ComponentProps<typeof SelectPrimitive.Group>) => {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
};

export const Select = {
  Root,
  Trigger,
  Content,
  Item,
  Label,
  Separator,
  ScrollUpButton,
  ScrollDownButton,
  Value,
  Group,
};
