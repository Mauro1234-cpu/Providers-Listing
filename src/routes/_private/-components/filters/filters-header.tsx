import { useState } from "react";

import { Icons } from "@/components";
import { useProviders } from "@/hooks/use-providers";
import type { FiltersHeaderProps, FilterState } from "@/types/filters";
import { ProvidersFound } from "./providers-found";
import { SelectsFields } from "./selects-fields";

// type FilterProps = {
//     setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
//   }

export const FiltersHeader = ({ desc, placeholder, textCount, title }: FiltersHeaderProps) => {
  const [filters, setFilters] = useState<FilterState>({
    Specialty: "",
    Gender: "",
    Clinic: "",
    search: "",
  });

  const { countProviders } = useProviders({ filters });

  return (
    <div className="px-6 pt-3 lg:px-35 lg:pt-6">
      <div>
        <h1 className="text-primary text-2xl font-semibold">{title}</h1>
        <p className="text-tertiary my-1 pr-7 text-base leading-6 lg:py-1">{desc}</p>
      </div>
      <div className="mt-5">
        <form action="search" className="flex flex-col gap-4" method="get">
          <div className="border-border-primary bg-input flex flex-row items-center gap-3 rounded-md border p-2">
            <Icons.Search className="w-4" />
            <input
              className="placeholder:text-placeholder w-full outline-none placeholder:text-sm placeholder:leading-5"
              id="search-form"
              onChange={(e) => {
                return setFilters((prev) => {
                  return {
                    ...prev,
                    search: e.target.value,
                  };
                });
              }}
              placeholder={placeholder}
              type="text"
              value={filters.search}
            />
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <SelectsFields setFilters={setFilters} />
          </div>
        </form>
        <ProvidersFound countProviders={countProviders} textCount={textCount} />
      </div>
    </div>
  );
};
