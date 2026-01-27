import { createFileRoute } from "@tanstack/react-router";
import { t } from "i18next";

import { getSelectedFilters } from "@/hooks/use-providers-filter-selections";
import { useProvidersFilters } from "@/hooks/use-providers-filters";
import { useProvidersQuery } from "@/services/providers/actions";
import { buildProviderParams } from "@/services/providers/build-provider-params";
import type { ProviderProps } from "@/types/cards";
import { Cards } from "./-components/cards/cards";
import { FiltersHeader } from "./-components/filters/filters-header";

const HomePage = () => {
  const { filters, setFilters } = useProvidersFilters();

  const { selectedClinic, selectedGender, selectedSpecialty } = getSelectedFilters({ filters });

  const params = buildProviderParams(
    { selectedClinic, selectedGender, selectedSpecialty },
    filters,
  );

  const { data, isError, isLoading } = useProvidersQuery({ params });

  const favoritesFound = data?.data?.filter((provider: ProviderProps) => {
    return provider.is_favorited === true;
  }).length;

  const count = data?.meta.total;

  return (
    <div className="flex flex-col gap-4">
      <FiltersHeader
        countProviders={count}
        desc={t("filters.desc")}
        favoritesFound={favoritesFound}
        filters={filters}
        placeholder={t("filters.placeholder")}
        setFilters={setFilters}
        textCount="providers found"
        title={t("filters.title")}
      />
      <Cards data={data} isError={isError} isLoading={isLoading} />
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });
