import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";

const CatchAllPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="font-bold">{t("notFound.title")}</h1>

      <h2>{t("notFound.description")}</h2>
    </div>
  );
};

export const Route = createFileRoute("/_private/$/")({ component: CatchAllPage });
