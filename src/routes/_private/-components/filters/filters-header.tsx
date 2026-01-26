import { Icons } from "@/components";
import type { FiltersHeaderProps } from "@/types/filters";
import { ProvidersFound } from "./providers-found";
import { SelectsFields } from "./selects-fields";

export const FiltersHeader = ({
  countProviders,
  desc,
  filters,
  placeholder,
  setFilters,
  textCount,
  title,
}: FiltersHeaderProps) => {
  return (
    <div className="pEx-6 pt-3 lg:px-35 lg:pt-6">
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
              value={filters.name}
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
