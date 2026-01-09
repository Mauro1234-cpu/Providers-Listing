import { type ComponentProps, useState } from "react";
import { tv } from "tailwind-variants";

import { Button, Icons } from "@/components";
import { Input } from "../input";

type PasswordInputProps = ComponentProps<typeof Input> & {
  error?: boolean;
};

const PasswordInputVariants = tv({
  slots: {
    input: "",
    icon: "cursor-pointer",
  },
  variants: {
    error: {
      true: {
        input: "border-border-danger-tertiary text-text-danger-tertiary",
      },
    },
    show: {
      false: {
        icon: "hidden",
      },
    },
  },
});

const { icon, input } = PasswordInputVariants();

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
