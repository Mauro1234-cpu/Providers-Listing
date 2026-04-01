import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import { tv } from "tailwind-variants";

import { Button, ErrorMessage, Input, Label, PasswordInput } from "@/components";
import { getLoginPayloadSchema, type LoginPayload, useLogin } from "@/services";
import { setAuthStoreToken } from "@/stores";
import { setIdStore } from "@/stores/use-id-store";
import { handleAxiosFieldErrors } from "@/utils";

const loginFormVariants = tv({
  slots: {
    spin: "hidden h-5 w-5 animate-spin rounded-full border-3 border-gray-500 border-t-transparent",
  },
  variants: {
    submit: {
      true: "block",
    },
  },
});

const { spin } = loginFormVariants();

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

export const LoginForm = () => {
  const { t } = useTranslation();

  const loginMutation = useLogin();

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    setError,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(getLoginPayloadSchema()),
  });

  const errorMessage = errors;

  const onSubmit: SubmitHandler<LoginPayload> = async (data) => {
    setIsSubmitting(true);
    await sleep(2000);

    loginMutation.mutate(data, {
      onSuccess: async ({ data: responseData }) => {
        const { accessToken } = responseData.data;
        toast.success(t("login.success"));
        setAuthStoreToken(accessToken);
        setIdStore(accessToken);
        await router.invalidate();
      },
      onError: (error) => {
        setIsSubmitting(false);
        handleAxiosFieldErrors<LoginPayload>(error, setError, t("login.error"));
      },
    });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">{t("form.email")}</Label>

        <Input
          error={!!errors?.email?.message}
          {...register("email")}
          placeholder={t("form.email")}
        />

        {!!errorMessage && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">{t("form.password")}</Label>
        </div>

        <PasswordInput
          error={!!errors?.password?.message}
          {...register("password")}
          placeholder={t("form.password")}
        />

        {!!errorMessage && <ErrorMessage>{errors?.password?.message}</ErrorMessage>}
      </div>
      <Button disabled={!isValid} isLoading={isSubmitting} type="submit">
        <div className={spin({ submit: isSubmitting })} />
        {t("login.login")}
      </Button>

      <p className="text-center text-sm leading-5 text-text-default-tertiary decoration-solid">
        <Link
          className="text-sm leading-5 text-text-brand-secondary underline underline-offset-4 hover:opacity-80"
          to="/register"
        >
          {t("login.noAccount")}
        </Link>
      </p>
    </form>
  );
};
