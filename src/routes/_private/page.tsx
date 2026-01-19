import { useState } from "react";
import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";

import { useProviders } from "@/hooks/use-providers";
import type { FilterState } from "@/types/filters";
import { Cards } from "./-components/cards/cards";
import { FiltersHeader } from "./-components/filters/filters-header";

const HomePage = () => {
  const { t } = useTranslation();

  const [filters, setFilters] = useState<FilterState>({
    Specialty: "",
    Gender: "",
    Clinic: "",
    search: "",
  });

  const { countProviders } = useProviders({ filters });

  return (
    <div className="flex flex-col gap-4">
      <FiltersHeader
        countProviders={countProviders}
        desc={t("filters.desc")}
        filters={filters}
        placeholder={t("filters.placeholder")}
        setFilters={setFilters}
        textCount="providers found"
        title={t("filters.title")}
      />
      <Cards filters={filters} />
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });
