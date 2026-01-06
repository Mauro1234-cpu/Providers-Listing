import type { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { t } from "i18next";
import { toast } from "sonner";
import { z } from "zod";

const axiosFormErrorSchema = z.object({
  response: z.object({
    data: z.object({
      error: z.object({
        code: z.string(),
        message: z.string(),
        fields: z.record(z.string(), z.array(z.string())),
      }),
    }),
  }),
});

const parseAxiosFormErrors = <T extends Record<string, unknown>>(apiError?: unknown) => {
  const parsedError = axiosFormErrorSchema.safeParse(apiError);

  if (parsedError.success) {
    return parsedError.data.response.data.error.fields as Partial<Record<keyof T, string[]>>;
  }

  return {};
};

export const handleAxiosFieldErrors = <T extends FieldValues>(
  error: unknown,
  setError: UseFormSetError<T>,
  defaultErrorMessage?: string,
) => {
  const formErrors = parseAxiosFormErrors<T>(error);
  const entries = Object.entries(formErrors) as [Path<T>, string[]][];

  entries.forEach(([fieldName, errors]) => {
    const firstError = errors[0];
    if (firstError) {
      setError(fieldName, { type: "backend", message: firstError }, { shouldFocus: true });
    }
  });

  if (!entries.length) {
    toast.error(defaultErrorMessage ?? t("common.requestError"));
  }
};
