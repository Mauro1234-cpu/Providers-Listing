import type { ComponentProps } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { tv } from "tailwind-variants";

import { Icons } from "../icons";

const checkboxVariants = tv({
  slots: {
    root: "peer size-4 shrink-0 cursor-pointer rounded-sm border border-border-neutral-tertiary bg-background-default-default shadow-xs transition-shadow outline-none focus-visible:ring-[3px] focus-visible:ring-background-brand-default/25 disabled:cursor-not-allowed disabled:border-border-disabled-default disabled:bg-background-disabled-default data-[state=checked]:bg-background-brand-default data-[state=checked]:text-icon-brand-on-brand data-[state=checked]:disabled:bg-background-disabled-default data-[state=checked]:disabled:text-icon-disabled-on-disabled",
    indicator: "flex items-center justify-center text-current transition-none",
    icon: "size-3.5",
  },
});

const { icon, indicator, root } = checkboxVariants();

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>;

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root className={root({ className })} data-slot="checkbox" {...props}>
      <CheckboxPrimitive.Indicator className={indicator()} data-slot="checkbox-indicator">
        <Icons.Check className={icon()} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
