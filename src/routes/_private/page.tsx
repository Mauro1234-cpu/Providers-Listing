import { createFileRoute } from "@tanstack/react-router";

import { Providers } from "@/hooks/use-providers-query";

const HomePage = () => {
  // const { t } = useTranslation();

  // const [filters, setFilters] = useState<FilterState>({
  //   Specialty: "",
  //   Gender: "",
  //   Clinic: "",
  //   search: "",
  // });
  // const [filters, setFilters] = useState<RequestParams<ProviderFilters>>({})

  // const { countProviders } = useProviders({ filters });

  const filter = {
    specialty: 1,
    clinic: 1,
    gender: 1,
    page: 1,
    perPage: 3,
  };

  return (
    <div className="flex flex-col gap-4">
      {/* <FiltersHeader
        countProviders={countProviders}
        desc={t("filters.desc")}
        filters={filters}
        placeholder={t("filters.placeholder")}
        setFilters={setFilters}
        textCount="providers found"
        title={t("filters.title")}
      />
      <Cards filters={filters} /> */}
      <Providers params={filter} />
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });
