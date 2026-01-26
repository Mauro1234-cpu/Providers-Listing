import { useState } from "react";

import { filterConfig } from "@/constants/filter-config";
import type { ProviderFilters } from "@/services/providers/types";
import { SelectField } from "./select-field";

type SelectsFieldsProps = {
  setFilters: React.Dispatch<React.SetStateAction<ProviderFilters>>;
};

export const SelectsFields = ({ setFilters }: SelectsFieldsProps) => {
  const [openName, setOpenName] = useState("");

  return filterConfig.map(({ data, key }) => {
    return (
      <SelectField
        filter={data[0]}
        isOpen={openName == key}
        key={key}
        name={key}
        options={data}
        setFilters={setFilters}
        setOpenName={setOpenName}
      />
    );
  });
};
