import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";

import { Icons } from "@/components";
import type { ProviderFilters } from "@/services/providers/types";
import type { FilterState } from "@/types/filters";

type Option = {
  id: number;
  name: string;
};

type SelectFieldProps = {
  name: keyof FilterState;
  filter: Option;
  options: Option[];
  isOpen: boolean;
  setOpenName: React.Dispatch<React.SetStateAction<string>>;
  setFilters: React.Dispatch<React.SetStateAction<ProviderFilters>>;
};

export const SelectField = ({
  filter,
  isOpen,
  name,
  options,
  setFilters,
  setOpenName,
}: SelectFieldProps) => {
  const [activeOption, setActiveOption] = useState<string>(filter.name);

  const handleToggle = () => {
    setOpenName((prev) => {
      return prev === name ? "" : name;
    });
  };

  return (
    <div className="border-border-primary bg-input relative flex flex-row items-center justify-between gap-3 rounded-md border p-2 lg:w-1/4">
      <button
        className="flex w-full flex-row items-center justify-between text-black focus:outline-none"
        id="dropdownDefaultButton"
        onClick={handleToggle}
        type="button"
      >
        {activeOption}
        <Icons.ChevronDown className="mr-1 size-6" />
      </button>
      <div
        className={tw(
          "border-border-primary absolute top-full left-0 z-10 mt-1 w-full rounded-md border bg-white shadow-lg",
          isOpen ? "block" : "hidden",
        )}
        id="dropdown"
      >
        <ul aria-labelledby="dropdownDefaultButton" className="text-body p-2 text-sm font-medium">
          <li>
            {options.map((option) => {
              return (
                <button
                  className={tw(
                    "hover:bg-tertiary flex w-full flex-row items-center justify-between rounded-lg p-2 text-left",
                    activeOption == option.name ? "bg-tertiary" : "",
                  )}
                  key={option.id}
                  onClick={() => {
                    setFilters((prev) => {
                      return {
                        ...prev,
                        [name]: option.id,
                      };
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
