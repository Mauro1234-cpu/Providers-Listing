import { type ComponentProps, useState } from "react";
import { tv } from "tailwind-variants";

import { Button, Icons } from "@/components";
import { Input } from "../input";

type PasswordInputProps = ComponentProps<typeof Input> & {
  error?: boolean;
};

const passwordInputVariants = tv({
  slots: {
    input: "focus:border-border-brand-default focus:outline-none",
    icon: "cursor-pointer",
  },
  variants: {
    error: {
      true: {
        input:
          "border-border-danger-tertiary text-text-danger-tertiary focus:border-border-danger-tertiary focus:outline-none",
      },
    },
    show: {
      false: {
        icon: "hidden",
      },
    },
  },
});

const { icon, input } = passwordInputVariants();

export const PasswordInput = ({ error, ...props }: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  return (
    <Input
      className={input({ error })}
      onBlurCapture={() => {
        setShowIcon(false);
      }}
      onFocusCapture={() => {
        setShowIcon(true);
      }}
      right={
        <Button
          className={icon({ show: showIcon })}
          onMouseDown={(e) => {
            e.preventDefault();
            setIsPasswordVisible((prev) => {
              return !prev;
            });
          }}
          variant="plainText"
        >
          {isPasswordVisible ? <Icons.Eye error={error} /> : <Icons.EyeOff error={error} />}
        </Button>
      }
      type={isPasswordVisible ? "text" : "password"}
      {...props}
    />
  );
};
