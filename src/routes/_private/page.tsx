import { createFileRoute } from "@tanstack/react-router";
import { t } from "i18next";

import { getSelectedFilters } from "@/hooks/use-providers-filter-selections";
import { useProvidersFilters } from "@/hooks/use-providers-filters";
import { useProvidersQuery } from "@/services/providers/actions";
import { buildProviderParams } from "@/services/providers/build-provider-params";
import { providerSearchSchema } from "@/services/providers/schemas";
import type { ProviderProps } from "@/types/cards";
import { Cards } from "./-components/cards/cards";
import { FiltersHeader } from "./-components/filters/filters-header";

const HomePage = () => {
  const { filters, updateFilters } = useProvidersFilters();

  const { selectedClinic, selectedFavorited, selectedGender, selectedSpecialty } =
    getSelectedFilters({ filters });

  const params = buildProviderParams(
    { selectedClinic, selectedGender, selectedSpecialty, selectedFavorited },
    filters,
  );

  const { data, fetchNextPage, hasNextPage, isError, isLoading } = useProvidersQuery(params);

  const providers =
    data?.pages.flatMap((page) => {
      return page.data;
    }) ?? [];

  const favoritesFound = providers.filter((provider: ProviderProps) => {
    return provider.isFavorited === true;
  }).length;

  let count = null;

  if (data?.pages[0]?.meta?.total) {
    count = data.pages[0].meta.total;
  }

  return (
    <div className="flex flex-col gap-4">
      <FiltersHeader
        countProviders={count ?? null}
        desc={t("filters.desc")}
        favoritesFound={favoritesFound}
        filters={filters}
        placeholder={t("filters.placeholder")}
        textCount="providers found"
        title={t("filters.title")}
        updateFilters={updateFilters}
      />
      <Cards
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isError={isError}
        isLoading={isLoading}
        providers={providers}
      />
    </div>
  );
};

export const Route = createFileRoute("/_private/")({
  component: HomePage,
  validateSearch: (search) => {
    return providerSearchSchema.parse(search);
  },
});
