import { tv } from "tailwind-variants";

import { Icons, IconWrapper } from "@/components";
import { SIZE } from "@/types/styles";

const conditionCheckerVariants = tv({
  slots: {
    root: "flex items-center gap-2",
    wrapper: "rounded-full bg-background-default-tertiary transition-all duration-300",
    icon: "text-text-brand-on-brand-tertiary transition-colors duration-300",
    label: "text-sm text-text-default-secondary",
  },
  variants: {
    isValid: {
      true: {
        wrapper: "bg-green-400",
        icon: "text-green-100",
      },
    },
  },
});

const { icon, label, root, wrapper } = conditionCheckerVariants();

type ConditionCheckerProps = {
  isValid: boolean;
  label: string;
};

export const ConditionChecker = ({ isValid, label: labelText }: ConditionCheckerProps) => {
  return (
    <div className={root()}>
      <IconWrapper className={wrapper({ isValid })} size={SIZE.MEDIUM}>
        <Icons.Check className={icon({ isValid })} />
      </IconWrapper>
      <span className={label()}>{labelText}</span>
    </div>
  );
};
