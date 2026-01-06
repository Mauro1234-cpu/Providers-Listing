import type { ComponentProps } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { tv } from "tailwind-variants";

import { Icons } from "@/components";

const radioGroupVariants = tv({
  slots: {
    root: "grid gap-3",
    item: "peer aspect-square size-4 shrink-0 cursor-pointer rounded-full border border-border-neutral-tertiary shadow-xs transition-[box-shadow] outline-none focus-visible:ring-4 focus-visible:ring-background-brand-default/25 disabled:cursor-not-allowed disabled:border-border-disabled-default disabled:bg-background-disabled-default data-[state=checked]:bg-background-brand-default data-[state=checked]:text-icon-brand-on-brand data-[state=checked]:disabled:border-border-disabled-default data-[state=checked]:disabled:bg-background-disabled-default",
    indicatorWrapper: "relative flex items-center justify-center",
    indicator:
      "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-icon-brand-on-brand",
  },
});

const { indicator, indicatorWrapper, item, root } = radioGroupVariants();

const Root = ({ className, ...props }: ComponentProps<typeof RadioGroupPrimitive.Root>) => {
  return (
    <RadioGroupPrimitive.Root className={root({ className })} data-slot="radio-group" {...props} />
  );
};

const Indicator = ({
  className,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Indicator>) => {
  return (
    <RadioGroupPrimitive.Indicator
      className={indicatorWrapper({ className })}
      data-slot="radio-group-indicator"
      {...props}
    >
      <Icons.Circle className={indicator()} />
    </RadioGroupPrimitive.Indicator>
  );
};

const Item = ({ className, ...props }: ComponentProps<typeof RadioGroupPrimitive.Item>) => {
  return (
    <RadioGroupPrimitive.Item
      className={item({ className })}
      data-slot="radio-group-item"
      {...props}
    />
  );
};

export const RadioGroup = { Root, Item, Indicator };
