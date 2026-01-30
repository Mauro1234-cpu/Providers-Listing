import type { ComponentPropsWithoutRef, ElementType, JSX, PropsWithChildren } from "react";
import type { IconProps } from "@iconify/react";
import { Icon, loadIcons } from "@iconify/react";
import { tv } from "tailwind-variants";

import { MailIcon } from "@/assets/mail-icon";
import { PhoneIcon } from "@/assets/phone-icon";
import { LangIcon } from "@/routes/_private/-components/cards/lang-icon";
import { SIZE, type Size, type Styled } from "@/types/styles";

const LUCIDE_PREFIX = "lucide:";

const AVAILABLE_ICONIFY_ICONS = {
  Heart: "heart",
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
  Stethoscope: "stethoscope",
  MapPin: "map-pin",
  Phone: "phone",
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
    isError: {
      true: {
        icon: "text-icon-danger-tertiary",
      },
    },
  },
});

const { icon, wrapper } = iconsVariants();

type IconifyIconProps = {
  isError?: boolean;
} & Omit<IconProps, "icon">;

const customIcons = {
  Phone: PhoneIcon,
  Mail: MailIcon,
  Lang: LangIcon,
};

const iconifyIcons = Object.fromEntries(
  Object.entries(AVAILABLE_ICONIFY_ICONS).map(([key, value]) => {
    return [
      key,
      ({ className, isError, ...rest }: IconifyIconProps) => {
        return (
          <Icon
            className={icon({ className, isError })}
            icon={`${LUCIDE_PREFIX}${value}`}
            {...rest}
          />
        );
      },
    ];
  }),
) as Record<keyof typeof AVAILABLE_ICONIFY_ICONS, (props: IconifyIconProps) => JSX.Element>;

const svgIcons = Object.fromEntries(
  Object.entries(customIcons).map(([key, Component]) => {
    return [
      key,
      ({ className, isError, ...rest }: IconifyIconProps) => {
        return <Component className={icon({ className, isError })} {...rest} />;
      },
    ];
  }),
) as Record<keyof typeof customIcons, (props: IconifyIconProps) => JSX.Element>;

export const Icons = { ...iconifyIcons, ...svgIcons } as const;

type IconWrapperProps<TElement extends ElementType> = {
  size?: Size;
  as?: TElement;
  error?: boolean;
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
