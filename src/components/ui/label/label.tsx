import { type ComponentProps } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv } from "tailwind-variants";

import type { Styled } from "@/types/styles";

const labelVariants = tv({
  base: "mb-1 text-sm leading-5 font-normal text-text-default-default",
});

type LabelProps = ComponentProps<typeof LabelPrimitive.Root> & Styled;

export const Label = (props: LabelProps) => {
  return <LabelPrimitive.Root className={labelVariants()} {...props} />;
};
