import { type ComponentProps } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv } from "tailwind-variants";

import type { Styled } from "@/types/styles";

const labelVariants = tv({
  base: "mb-1 text-sm leading-5 leading-none font-medium text-text-default-default peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
});

type LabelProps = ComponentProps<typeof LabelPrimitive.Root> & Styled;

export const Label = ({ ...props }: LabelProps) => {
  return <LabelPrimitive.Root className={labelVariants()} {...props} />;
};
