import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";

import { FiltersHeader } from "./-components/filters/filters-header";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <FiltersHeader
        desc={t("filters.desc")}
        placeholder={t("filters.placeholder")}
        textCount="providers found"
        title={t("filters.title")}
      />
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });
