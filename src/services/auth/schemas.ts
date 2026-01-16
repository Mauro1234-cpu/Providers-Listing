import { z } from "zod";

import i18n from "@/i18n";

export const getLoginPayloadSchema = () => {
  return z.object({
    email: z.email({
      message: i18n.t("form.errors.invalidField", { field: i18n.t("form.email") }),
    }),
    password: z
      .string()
      .trim()
      .min(6, {
        message: i18n.t("form.errors.minLength", { field: i18n.t("form.password"), length: 6 }),
      }),
  });
};

export const loginResponseSchema = z.object({
  accessToken: z.string(),
});

export const getRegisterPayloadSchema = () => {
  return z
    .object({
      name: z
        .string()
        .trim()
        .min(1, {
          message: i18n.t("form.errors.required", { field: i18n.t("form.name") }),
        }),
      email: z
        .string()
        .trim()
        .min(1, {
          message: i18n.t("form.errors.required", { field: i18n.t("form.email") }),
        })
        .email({
          message: i18n.t("form.errors.invalidField", { field: i18n.t("form.email") }),
        }),
      password: z
        .string()
        .trim()
        .min(1, {
          message: i18n.t("form.errors.required", { field: i18n.t("form.password") }),
        })
        .min(8, {
          message: i18n.t("form.errors.minLength", { field: i18n.t("form.password"), length: 8 }),
        }),
      password_confirmation: z
        .string()
        .trim()
        .min(1, {
          message: i18n.t("form.errors.confirm"),
        })
        .min(8, {
          message: i18n.t("form.errors.minLength", {
            field: i18n.t("form.confirmPassword"),
            length: 8,
          }),
        }),
    })
    .refine(
      (data) => {
        return data.password === data.password_confirmation;
      },
      {
        path: ["passwordConfirm"],
        message: i18n.t("form.errors.passwordMismatch"),
      },
    );
};
