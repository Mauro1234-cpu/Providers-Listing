import type { ComponentProps } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { tv } from "tailwind-variants";

import { Icons } from "@/components";

const accordionVariants = tv({
  slots: {
    item: "border-b border-border-default-default last:border-b-0",
    icon: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-text-default-secondary transition-transform duration-200",
    header: "flex",
    trigger:
      "flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-3 focus-visible:ring-background-brand-default/25 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
    content:
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
  },
});

const { content, header, icon, item, trigger } = accordionVariants();

const Root = ({ ...props }: ComponentProps<typeof AccordionPrimitive.Root>) => {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
};

const Header = ({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Header>) => {
  return <AccordionPrimitive.Header className={header({ className })} {...props} />;
};

const Item = ({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) => {
  return (
    <AccordionPrimitive.Item
      className={item({ className })}
      data-slot="accordion-item"
      {...props}
    />
  );
};

const Trigger = ({
  children,
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) => {
  return (
    <AccordionPrimitive.Trigger
      className={trigger({ className })}
      data-slot="accordion-trigger"
      {...props}
    >
      {children}
      <Icons.ChevronDown className={icon({ className })} />
    </AccordionPrimitive.Trigger>
  );
};

const Content = ({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Content>) => {
  return (
    <AccordionPrimitive.Content
      className={content({ className })}
      data-slot="accordion-content"
      {...props}
    />
  );
};

export const Accordion = { Root, Content, Item, Trigger, Header };
