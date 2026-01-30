import { useTranslation } from "react-i18next";

import { SearchImg } from "@/assets/search-img";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-6 flex flex-col items-center justify-center text-center text-lg text-text-default-secondary">
      <SearchImg className="mb-6 w-72" />

      <p className="max-w-md">{t("filters.notFounds")}</p>
      <p className="max-w-md">{t("filters.adjustFilters")}</p>
    </div>
  );
};
