import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const cardVariants = tv({
  slots: {
    root: "flex flex-col gap-6 rounded-xl border border-border-default-default bg-background-default-default p-6 text-text-default-default shadow-sm",
    header:
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
    title: "leading-none font-semibold",
    description: "text-sm text-text-default-secondary",
    footer: "flex items-center pt-6",
    action: "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
  },
});

const { action, description, footer, header, root, title } = cardVariants();

const Root = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={root({ className })} data-slot="card" {...props} />;
};

const Header = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={header({ className })} data-slot="card-header" {...props} />;
};

const Title = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={title({ className })} data-slot="card-title" {...props} />;
};

const Description = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={description({ className })} data-slot="card-description" {...props} />;
};

const Content = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={className} data-slot="card-content" {...props} />;
};

const Footer = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={footer({ className })} data-slot="card-footer" {...props} />;
};

const Action = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={action({ className })} data-slot="card-action" {...props} />;
};

export const Card = {
  Root,
  Header,
  Title,
  Description,
  Content,
  Footer,
  Action,
};
