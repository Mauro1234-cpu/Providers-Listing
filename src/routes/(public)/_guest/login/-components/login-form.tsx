import { type SubmitHandler, useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate, useRouter, useSearch } from "@tanstack/react-router";
import { toast } from "sonner";
import { tv } from "tailwind-variants";

import { Button, ErrorMessage, Input, Label, PasswordInput } from "@/components";
import { getLoginPayloadSchema, type LoginPayload, useLogin } from "@/services";
import { setAuthStoreToken } from "@/stores";
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

export const ROUTES = {
  REGISTER: "/register",
  LOGIN: "/login",
  HOME: "/",
};

const { spin } = loginFormVariants();

export const LoginForm = () => {
  const { t } = useTranslation();

  const loginMutation = useLogin();

  const router = useRouter();
  const search = useSearch({ from: "/(public)/_guest/login/" });
  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(getLoginPayloadSchema()),
  });

  const errorMessage = errors;

  const onSubmit: SubmitHandler<LoginPayload> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: async ({ data: responseData }) => {
        const { authToken } = responseData.data;
        toast.success(t("login.success"));
        setAuthStoreToken(authToken);
        await router.invalidate();
        await navigate({ to: search.redirect || ROUTES.HOME });
      },
      onError: (error) => {
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

      <Button className="h-10 w-full" disabled={loginMutation.isPending} type="submit">
        <div className={spin({ submit: loginMutation.isPending })} />
        {t("login.login")}
      </Button>

      <p className="text-center text-sm">
        <Trans
          components={{
            Link: (
              <Link
                className="text-sm leading-5 text-text-brand-secondary underline underline-offset-4 hover:opacity-80"
                to={ROUTES.REGISTER}
              />
            ),
          }}
          i18nKey="login.noAccount"
        />
      </p>
    </form>
  );
};
