import type { ComponentProps } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { tv } from "tailwind-variants";

const tabsVariants = tv({
  slots: {
    root: "flex flex-col gap-2",
    list: "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-background-default-secondary p-1 text-text-brand-secondary",
    trigger:
      "inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-text-default-secondary transition-[color,box-shadow] hover:text-text-default-default focus-visible:ring-4 focus-visible:ring-background-brand-default/25 focus-visible:outline-none disabled:pointer-events-none data-[state=active]:bg-background-default-default data-[state=active]:text-text-default-default data-[state=active]:shadow-sm",
    content: "flex-1 rounded-lg bg-background-default-secondary p-4 outline-none",
  },
});

const { content, list, root, trigger } = tabsVariants();

const Root = ({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>) => {
  return <TabsPrimitive.Root className={root({ className })} data-slot="tabs" {...props} />;
};

const List = ({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) => {
  return <TabsPrimitive.List className={list({ className })} data-slot="tabs-list" {...props} />;
};

const Trigger = ({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>) => {
  return (
    <TabsPrimitive.Trigger className={trigger({ className })} data-slot="tabs-trigger" {...props} />
  );
};

const Content = ({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) => {
  return (
    <TabsPrimitive.Content className={content({ className })} data-slot="tabs-content" {...props} />
  );
};

export const Tabs = { Root, List, Trigger, Content };
