import { Icons } from "@/components";
import type { FiltersHeaderProps } from "@/types/filters";
import { FavoritesButton } from "./favorites-button";
import { ProvidersFound } from "./providers-found";
import { SelectsFields } from "./selects-fields";

export const FiltersHeader = ({
  countProviders,
  desc,
  favoritesFound,
  filters,
  placeholder,
  setFilters,
  textCount,
  title,
}: FiltersHeaderProps) => {
  return (
    <div className="pEx-6 pt-3 lg:px-35 lg:pt-6">
      <div>
        <h1 className="text-2xl font-semibold text-text-default-default">{title}</h1>
        <p className="my-1 pr-26 leading-6 text-text-default-tertiary lg:py-1">{desc}</p>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <form action="search" className="flex flex-col gap-4" method="get">
          <div className="bg-input flex flex-row items-center gap-3 rounded-md border border-border-default-default p-2">
            <Icons.Search className="w-4" />
            <input
              className="w-full outline-none placeholder:text-sm placeholder:leading-5 placeholder:text-text-disabled-default"
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
            <FavoritesButton filters={filters} found={favoritesFound} setFilters={setFilters} />
          </div>
        </form>
        <ProvidersFound countProviders={countProviders} textCount={textCount} />
      </div>
    </div>
  );
};
