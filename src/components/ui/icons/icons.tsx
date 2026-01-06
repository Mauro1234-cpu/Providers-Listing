import type { ComponentPropsWithoutRef, ElementType, JSX, PropsWithChildren } from "react";
import type { IconProps } from "@iconify/react";
import { Icon, loadIcons } from "@iconify/react";
import { tv } from "tailwind-variants";

import { SIZE, type Size, type Styled } from "@/types/styles";

const LUCIDE_PREFIX = "lucide:";

const AVAILABLE_ICONIFY_ICONS = {
  Check: "check",
  ChevronDown: "chevron-down",
  ChevronRight: "chevron-right",
  ChevronUp: "chevron-up",
  ChevronLeft: "chevron-left",
  Circle: "circle",
  Home: "home",
  LoaderCircle: "loader-circle",
  LogOut: "log-out",
  MoreHorizontal: "more-horizontal",
  Menu: "menu",
  Search: "search",
  Slash: "slash",
  Close: "x",
  Plus: "plus",
  Eye: "eye",
  EyeOff: "eye-off",
  Lock: "lock",
};

export const initializeIcons = () => {
  return loadIcons(
    Object.values(AVAILABLE_ICONIFY_ICONS).map((icon) => {
      return `${LUCIDE_PREFIX}${icon}`;
    }),
  );
};

const iconsVariants = tv({
  slots: {
    icon: "size-4",
    wrapper: "flex shrink-0 flex-row items-center justify-center",
  },
  variants: {
    size: {
      [SIZE.X_SMALL]: { wrapper: "size-4" },
      [SIZE.SMALL]: { wrapper: "size-5" },
      [SIZE.MEDIUM]: { wrapper: "size-6" },
      [SIZE.LARGE]: { wrapper: "size-9" },
      [SIZE.X_LARGE]: { wrapper: "size-10" },
    },
  },
});

const { icon, wrapper } = iconsVariants();

type IconifyIconProps = Omit<IconProps, "icon">;

const iconifyIcons = Object.fromEntries(
  Object.entries(AVAILABLE_ICONIFY_ICONS).map(([key, value]) => {
    return [
      key,
      ({ className, ...rest }: IconifyIconProps) => {
        return <Icon className={icon({ className })} icon={`${LUCIDE_PREFIX}${value}`} {...rest} />;
      },
    ];
  }),
) as Record<keyof typeof AVAILABLE_ICONIFY_ICONS, (props: IconifyIconProps) => JSX.Element>;

export const Icons = { ...iconifyIcons } as const;

type IconWrapperProps<TElement extends ElementType> = {
  size?: Size;
  as?: TElement;
} & Styled &
  PropsWithChildren;

export const IconWrapper = <TElement extends ElementType = "div">({
  as,
  children,
  className,
  size = SIZE.MEDIUM,
  ...rest
}: Omit<ComponentPropsWithoutRef<TElement>, keyof IconWrapperProps<TElement>> &
  IconWrapperProps<TElement>) => {
  const Component = as ?? "div";

  return (
    <Component className={wrapper({ size, className })} {...rest}>
      {children}
    </Component>
  );
};
