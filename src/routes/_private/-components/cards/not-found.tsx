import { useTranslation } from "react-i18next";

import { SearchImg } from "@/assets/search-img";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20 flex flex-col items-center justify-center text-center">
      <SearchImg className="mb-6 w-72" />

      <p className="text-secondary max-w-md text-lg">{t("filters.notFound")}</p>
      <p className="text-secondary max-w-md text-lg">{t("filters.adjustFilters")}</p>
    </div>
  );
};
