import { useState } from "react";

import { filterConfig } from "@/constants/filter-config";
import type { UpdateFilters } from "@/types/filters";
import { SelectField } from "./select-field";

type SelectsFieldsProps = {
  updateFilters: UpdateFilters;
};

export const SelectsFields = ({ updateFilters }: SelectsFieldsProps) => {
  const [openName, setOpenName] = useState("");

  return filterConfig.map(({ data, key }) => {
    return (
      <SelectField
        filter={data[0]}
        isOpen={openName == key}
        key={key}
        name={key}
        options={data}
        setOpenName={setOpenName}
        updateFilters={updateFilters}
      />
    );
  });
};
