import { useState } from "react";
import { t } from "i18next";
import { tv } from "tailwind-variants";

import { Icons } from "@/components";

export const buttonVariants = tv({
  slots: {
    base: "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-all duration-300 ease-in-out focus-visible:ring-4 focus-visible:ring-background-brand-default/25 focus-visible:outline-none disabled:pointer-events-none lg:w-31 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    count:
      "flex size-7 items-center justify-center rounded-full bg-background-default-default text-text-default-default",
  },
  variants: {
    variant: {
      primary:
        "bg-background-brand-default text-text-neutral-on-neutral hover:bg-background-brand-hover disabled:bg-background-disabled-default disabled:text-text-disabled-on-disabled",
    },
    size: {
      lg: "py-5 text-lg",
    },
    isActive: {
      false: {
        base: "border border-border-brand-default bg-transparent text-text-default-default shadow-sm hover:bg-background-default-hover active:bg-transparent disabled:border-border-disabled-default disabled:text-text-disabled-default",
        count: "bg-background-base-secondary",
      },
    },
    hide: {
      true: {
        count: "hidden",
      },
    },
  },
});

type buttonProps = {
  found: number;
};

const { base, count } = buttonVariants();

export const FavoritesButton = ({ found }: buttonProps) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={base({ variant: "primary", size: "lg", isActive: active })}
      id="buttonFavorites"
      onClick={() => {
        setActive((a) => {
          return !a;
        });
      }}
      type="button"
    >
      <Icons.Heart className="size-6" />
      {t("favorites")}
      <div className={count({ hide: found === 0 })}>
        <p>{found}</p>
      </div>
    </button>
  );
};
