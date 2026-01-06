import type { ComponentProps, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Link as RouterLink } from "@tanstack/react-router";
import { tv } from "tailwind-variants";

import { Icons } from "../icons";

type LinkProps = Omit<ComponentProps<typeof RouterLink>, "children"> & {
  asChild?: boolean;
  children: ReactNode;
};

const breadcrumbVariants = tv({
  slots: {
    list: "flex flex-wrap items-center gap-1.5 text-sm break-words text-text-default-secondary sm:gap-2.5",
    item: "inline-flex items-center gap-1.5",
    link: "transition-colors hover:text-text-default-default",
    page: "font-normal text-text-default-default",
    separator: "[&>svg]:size-3.5",
    ellipsis: "flex size-9 items-center justify-center",
  },
});

const { ellipsis, item, link, list, page, separator } = breadcrumbVariants();

const Root = (props: ComponentProps<"nav">) => {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
};

const List = ({ className, ...props }: ComponentProps<"ol">) => {
  return <ol className={list({ className })} data-slot="breadcrumb-list" {...props} />;
};

const Item = ({ className, ...props }: ComponentProps<"li">) => {
  return <li className={item({ className })} data-slot="breadcrumb-item" {...props} />;
};

const Link = ({ asChild, children, className, ...props }: LinkProps) => {
  if (asChild) {
    return (
      <Slot className={link({ className })} {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <RouterLink className={link({ className })} {...props}>
      {children}
    </RouterLink>
  );
};

const Page = ({ className, ...props }: ComponentProps<"span">) => {
  return (
    <span
      aria-current="page"
      aria-disabled="true"
      className={page({ className })}
      data-slot="breadcrumb-page"
      role="link"
      {...props}
    />
  );
};

const Separator = ({ children, className, ...props }: ComponentProps<"li">) => {
  return (
    <li
      aria-hidden="true"
      className={separator({ className })}
      data-slot="breadcrumb-separator"
      role="presentation"
      {...props}
    >
      {children ?? <Icons.ChevronRight className="size-4" />}
    </li>
  );
};

const Ellipsis = ({ className, ...props }: ComponentProps<"span">) => {
  return (
    <span
      aria-hidden="true"
      className={ellipsis({ className })}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      {...props}
    >
      <Icons.MoreHorizontal className="size-4" />
    </span>
  );
};

export const Breadcrumb = {
  Root,
  Ellipsis,
  Item,
  Link,
  List,
  Page,
  Separator,
};
