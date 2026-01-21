import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { t } from "i18next";

import { useProvidersQuery } from "@/services/providers/actions";
import type { RequestParams } from "@/services/types";
import type { FilterState } from "@/types/filters";
import { Cards } from "./-components/cards/cards";
import { FiltersHeader } from "./-components/filters/filters-header";

const HomePage = () => {
  const [filters, setFilters] = useState<FilterState>({
    Specialty: "",
    Gender: "",
    Clinic: "",
    search: "",
  });

  const providerFilters = useMemo(() => {
    return {
      specialty: filters.Specialty || undefined,
      gender: filters.Gender || undefined,
      clinic: filters.Clinic || undefined,
      search: filters.search || undefined,
    };
  }, [filters]);

  const params: RequestParams<typeof providerFilters> = {
    params: providerFilters,
  };

  const { data, isError, isLoading } = useProvidersQuery({ params });

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
