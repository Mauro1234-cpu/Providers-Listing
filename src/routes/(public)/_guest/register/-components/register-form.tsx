import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import { tv } from "tailwind-variants";

import { Button, ErrorMessage, Input, Label, PasswordInput } from "@/components";
import { getRegisterPayloadSchema, type RegisterPayload, useRegister } from "@/services";
import { handleAxiosFieldErrors } from "@/utils";

const registerFormVariants = tv({
  slots: {
    spin: "hidden h-5 w-5 animate-spin rounded-full border-3 border-gray-500 border-t-transparent",
  },
  variants: {
    submit: {
      true: "block",
    },
  },
});

const { spin } = registerFormVariants();

export const RegisterForm = () => {
  const { t } = useTranslation();

  const registerMutation = useRegister();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const navigate = useNavigate();

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    setError,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(getRegisterPayloadSchema()),
  });

  const errorMessage = errors;
  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  };
  const onSubmit: SubmitHandler<RegisterPayload> = async (data) => {
    setIsSubmitting(true);
    await sleep(2000);

    registerMutation.mutate(data, {
      onSuccess: async () => {
        toast.success(t("register.success"));
        await router.invalidate();
        await navigate({ to: "/success" });
      },
      onError: (error) => {
        setIsSubmitting(false);
        handleAxiosFieldErrors<RegisterPayload>(error, setError, t("register.error"));
      },
    });
  };

  return (
    <form className="mt-7 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Label className="mb-2 h-4" htmlFor="name">
          {t("form.name")}
        </Label>

        <Input error={!!errors?.name?.message} {...register("name")} placeholder={t("form.name")} />

        {!!errorMessage && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-2">
        <Label className="mb-2 h-4" htmlFor="email">
          {t("form.email")}
        </Label>

        <Input
          error={!!errors?.email?.message}
          {...register("email")}
          placeholder={t("form.email")}
        />

        {!!errorMessage && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label className="mb-2 h-4" htmlFor="password">
            {t("form.password")}
          </Label>
        </div>

        <PasswordInput
          error={!!errors?.password?.message}
          {...register("password")}
          placeholder={t("form.password")}
        />

        {!!errorMessage && <ErrorMessage>{errors?.password?.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label className="mb-2 h-4" htmlFor="passwordConfirm">
            {t("form.passwordConfirm")}
          </Label>
        </div>

        <PasswordInput
          error={!!errors?.password?.message}
          {...register("password_confirmation")}
          placeholder={t("form.passwordConfirm")}
        />

        {!!errorMessage && <ErrorMessage>{errors?.password_confirmation?.message}</ErrorMessage>}
      </div>
      <Button className="w-full" disabled={!isValid} isLoading={isSubmitting} type="submit">
        <div className={spin({ submit: isSubmitting })} />
        {t("register.register")}
      </Button>

      <p className="text-center text-sm leading-5 text-text-default-tertiary decoration-solid">
        <Link
          className="text-sm leading-5 underline underline-offset-4 hover:opacity-80"
          to="/login"
        >
          {t("register.existAccount")}
        </Link>
      </p>
    </form>
  );
};
