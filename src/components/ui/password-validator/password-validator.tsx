import { type Control, type FieldValues, type Path, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { hasLetter, hasMinLength, hasNumber } from "@/services";
import { ConditionChecker } from "./condition-checker";

type PasswordValidatorProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

export const PasswordValidator = <T extends FieldValues>({
  control,
  name,
}: PasswordValidatorProps<T>) => {
  const { t } = useTranslation();
  const value = useWatch({ control, name });

  const validations = [
    {
      label: t("form.errors.minLength", { field: t("form.password"), length: 8 }),
      validationFunc: hasMinLength,
    },
    {
      label: t("form.errors.containsLetter", { field: t("form.password") }),
      validationFunc: hasLetter,
    },
    {
      label: t("form.errors.containsNumber", { field: t("form.password") }),
      validationFunc: hasNumber,
    },
  ];

  return (
    <div className="flex flex-col gap-3 rounded-md bg-background-default-secondary p-4">
      <h3 className="text-sm font-semibold text-text-default-default">
        {t("form.passwordMustInclude")}
      </h3>

      {validations.map(({ label, validationFunc }) => {
        return <ConditionChecker isValid={validationFunc(value)} key={label} label={label} />;
      })}
    </div>
  );
};
