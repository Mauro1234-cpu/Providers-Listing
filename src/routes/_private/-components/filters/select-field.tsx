import { useState } from "react";
import { tv } from "tailwind-variants";

import { Icons } from "@/components";
import type { Option, ProviderFiltersUI, UpdateFilters } from "@/types/filters";

type SelectFieldProps = {
  name: keyof ProviderFiltersUI;
  filter: Option;
  options: Option[];
  isOpen: boolean;
  setOpenName: React.Dispatch<React.SetStateAction<string>>;
  updateFilters: UpdateFilters;
};

const selectVariants = tv({
  slots: {
    base: "absolute top-full left-0 z-10 mt-1 w-full rounded-md border border-border-default-default bg-white shadow-lg",
    container:
      "relative flex flex-row items-center justify-between gap-3 rounded-md border border-border-default-default bg-background-default-default p-2 lg:w-1/4",
    button:
      "flex w-full flex-row items-center justify-between rounded-lg p-2 text-left hover:bg-background-brand-tertiary",
    span: "w-5",
  },
  variants: {
    open: {
      true: {
        base: "block",
        container: "border-border-brand-default",
        button: "bg-background-brand-tertiary",
        span: "text-white",
      },
      false: {
        base: "hidden",
        span: "text-text-default-default",
      },
    },
  },
});

const { base, button, container } = selectVariants();

export const SelectField = ({
  filter,
  isOpen,
  name,
  options,
  setOpenName,
  updateFilters,
}: SelectFieldProps) => {
  const [activeOption, setActiveOption] = useState<string>(filter.name);

  const handleToggle = () => {
    setOpenName((prev) => {
      return prev === name ? "" : name;
    });
  };

  return (
    <div className={container({ open: isOpen })}>
      <button
        className="flex w-full flex-row items-center justify-between text-sm text-text-default-default focus:outline-none"
        id="dropdownDefaultButton"
        onClick={handleToggle}
        type="button"
      >
        {activeOption}
        <Icons.ChevronDown className="mr-1 size-6" />
      </button>
      <div className={base({ open: isOpen })} id="dropdown">
        <ul
          aria-labelledby="dropdownDefaultButton"
          className="p-2 text-sm leading-5 text-text-default-default"
        >
          <li>
            {options.map((option) => {
              return (
                <button
                  className={button({ open: activeOption == option.name })}
                  key={option.id}
                  onClick={() => {
                    const value = name === "gender" || name === "name" ? option.name : option.id;
                    updateFilters({
                      [name]: value,
                    });
                    setOpenName("");
                    setActiveOption(option.name);
                  }}
                  type="button"
                >
                  {option.name}
                  {activeOption == option.name && <Icons.Check />}
                </button>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};
