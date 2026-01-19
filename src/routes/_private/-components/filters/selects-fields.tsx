import { useState } from "react";

import { filterConfig } from "@/constants/filter-config";
import type { FilterState } from "@/types/filters";
import { SelectField } from "./select-field";

type SelectsFieldsProps = {
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};

export const SelectsFields = ({ setFilters }: SelectsFieldsProps) => {
  const [openName, setOpenName] = useState("");

  return filterConfig.map(({ data, key }) => {
    return (
      <SelectField
        filter={data.options[0]}
        isOpen={openName == key}
        key={key}
        name={key}
        options={data.options}
        setFilters={setFilters}
        setOpenName={setOpenName}
      />
    );
  });
};
