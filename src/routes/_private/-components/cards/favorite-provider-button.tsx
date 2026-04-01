import { useState } from "react";
import { tv } from "tailwind-variants";

import { Icons } from "@/components";

const favoriteButtonVariants = tv({
  slots: {
    base: "absolute top-3 right-3 z-10 rounded-full p-2 shadow-md transition-all",
    icon: "pointer-events-none size-6 transition-colors",
  },
  variants: {
    isActive: {
      false: {
        base: "bg-white/80 text-black hover:scale-105",
        icon: "text-icon-default-tertiary",
      },
      true: {
        base: "bg-background-danger-default hover:scale-110",
        icon: "bg-background-default-default text-white",
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

export const FavoriteProviderButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggle = () => {
    return setIsFavorite((prev) => {
      return !prev;
    });
  };

  const { base, icon } = favoriteButtonVariants({ isActive: isFavorite });

  return (
    <button className={base()} onClick={handleToggle} type="button">
      <Icons.Heart className={icon()} />
    </button>
  );
};
