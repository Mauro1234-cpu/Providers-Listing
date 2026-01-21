import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { t } from "i18next";

import { useProvidersQuery } from "@/services/providers/actions";
import type { FilterState } from "@/types/filters";
import { Cards } from "./-components/cards/cards";
import { FiltersHeader } from "./-components/filters/filters-header";

const HomePage = () => {
  // const { t } = useTranslation();

  const [filters, setFilters] = useState<FilterState>({
    Specialty: "",
    Gender: "",
    Clinic: "",
    search: "",
  });
  // const [filters, setFilters] = useState<RequestParams<ProviderFilters>>({})

  // const filter = {
  //   specialty: 1,
  //   clinic: 1,
  //   gender: 1,
  //   page: 1,
  //   perPage: 3,
  // };

  const { data, isError, isLoading } = useProvidersQuery();

  const count = data?.meta.total;

  return (
    <div className="flex flex-col gap-4">
      <FiltersHeader
        countProviders={count}
        desc={t("filters.desc")}
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
