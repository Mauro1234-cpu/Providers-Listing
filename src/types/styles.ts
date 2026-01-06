export type Styled = {
  className?: string;
};

export const SIZE = {
  X_SMALL: "xs",
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
  X_LARGE: "xl",
} as const;

export type Size = (typeof SIZE)[keyof typeof SIZE];
