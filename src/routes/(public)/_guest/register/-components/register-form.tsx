import { type SubmitHandler, useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate, useRouter, useSearch } from "@tanstack/react-router";
import { toast } from "sonner";
import { tv } from "tailwind-variants";

import { Button, ErrorMessage, Input, Label, PasswordInput } from "@/components";
import { getRegisterPayloadSchema, type RegisterPayload, useRegister } from "@/services";
import { setAuthStoreToken } from "@/stores";
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
  const isSubmitting = registerMutation.isPending;

  const router = useRouter();
  const search = useSearch({ from: "/(public)/_guest/register/" });
  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(getRegisterPayloadSchema()),
  });

  const onSubmit: SubmitHandler<RegisterPayload> = (data) => {
    registerMutation.mutate(data, {
      onSuccess: async ({ data: responseData }) => {
        const { authToken } = responseData.data;
        toast.success(t("register.success"));
        setAuthStoreToken(authToken);
        await router.invalidate();
        await navigate({ to: search.redirect || "/" });
      },
      onError: (error) => {
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

        <ErrorMessage errorMessage={errors?.name?.message} />
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

        <ErrorMessage errorMessage={errors?.email?.message} />
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

        <ErrorMessage errorMessage={errors?.password?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label className="mb-2 h-4" htmlFor="passwordConfirm">
            {t("form.passwordConfirm")}
          </Label>
        </div>

        <PasswordInput
          error={!!errors?.password?.message}
          {...register("passwordConfirm")}
          placeholder={t("form.passwordConfirm")}
        />

        <ErrorMessage errorMessage={errors?.passwordConfirm?.message} />
      </div>

      <Button disabled={isSubmitting} type="submit">
        <div className={spin({ submit: isSubmitting })} />
        {t("register.register")}
      </Button>

      <p className="text-center text-sm leading-5 text-text-default-tertiary decoration-solid">
        <Trans
          components={{
            Link: (
              <Link
                className="text-sm leading-5 underline underline-offset-4 hover:opacity-80"
                to="/login"
              />
            ),
          }}
          i18nKey="register.existAccount"
        />
      </p>
    </form>
  );
};
