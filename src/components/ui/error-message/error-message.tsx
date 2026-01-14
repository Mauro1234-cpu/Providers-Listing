import type { ComponentProps } from "react";

export type ErrorMessageProps = Pick<ComponentProps<"p">, "children">;

export const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <p className="text-xs leading-4 font-light text-text-danger-on-danger-tertiary" {...props} />
  );
};
