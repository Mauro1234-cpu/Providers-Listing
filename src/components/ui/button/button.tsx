import { type ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";

import type { Styled } from "@/types/styles";
import { Spinner } from "../spin";

export const buttonVariants = tv({
  slots: {
    base: "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-all duration-300 ease-in-out focus-visible:ring-4 focus-visible:ring-background-brand-default/25 focus-visible:outline-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  },
  variants: {
    variant: {
      primary:
        "bg-background-brand-default text-text-neutral-on-neutral hover:bg-background-brand-hover disabled:bg-background-disabled-default disabled:text-text-disabled-on-disabled",
      secondary:
        "bg-background-brand-default text-text-brand-on-brand hover:bg-background-brand-hover disabled:bg-background-disabled-default disabled:text-text-disabled-on-disabled",
      tertiary:
        "bg-background-brand-tertiary text-text-brand-on-brand-tertiary hover:bg-background-brand-tertiary-hover active:bg-background-brand-tertiary disabled:bg-background-disabled-default disabled:text-text-disabled-on-disabled",
      outlined:
        "border border-border-brand-default bg-transparent text-text-default-default shadow-sm hover:bg-background-default-hover active:bg-transparent disabled:border-border-disabled-default disabled:text-text-disabled-default",
      elevated:
        "border border-border-default-default bg-transparent text-text-default-default shadow-md hover:bg-background-default-hover active:bg-transparent disabled:border-border-disabled-default disabled:text-text-disabled-default",
      plainText:
        "text-text-brand-default hover:text-text-brand-secondary active:text-text-brand-default disabled:text-text-disabled-default",
    },
    size: {
      sm: "px-1.5 py-1 text-xs md:px-2 md:py-1.5 md:text-sm",
      default: "px-1.5 py-1 text-lg md:px-2 md:py-1.5 md:text-base",
      lg: "px-3 py-2 text-lg",
      icon: "p-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

const { base } = buttonVariants();

export type ButtonProps = {
  asChild?: boolean;
  isLoading?: boolean;
} & ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> &
  Styled;

export const Button = ({
  asChild = false,
  children,
  className,
  disabled,
  isLoading,
  size,
  variant,
  ...props
}: ButtonProps) => {
  return asChild ? (
    <Slot className={base({ variant, size, className })} {...props}>
      {children}
    </Slot>
  ) : (
    <button
      className={base({ variant, size, className })}
      disabled={isLoading || disabled}
      type="button"
      {...props}
    >
      {isLoading ? <Spinner /> : null}
      {children}
    </button>
  );
};
