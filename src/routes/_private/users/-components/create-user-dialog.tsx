import { type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Button,
  Dialog,
  ErrorMessage,
  Input,
  Label,
  PasswordInput,
  PasswordValidator,
} from "@/components";
import { type CreateUser, getCreateUserSchema, useCreateUser } from "@/services";
import { handleAxiosFieldErrors } from "@/utils";

type CreateUserDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CreateUserDialog = ({ isOpen, onOpenChange }: CreateUserDialogProps) => {
  const { t } = useTranslation();

  const { isPending: isCreating, mutate: createUser } = useCreateUser();

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(getCreateUserSchema()),
  });

  const onSubmit: SubmitHandler<CreateUser> = (data) => {
    return createUser(data, {
      onSuccess: () => {
        toast.success(t("users.create.success"));
        onOpenChange(false);
        reset();
      },
      onError: (error) => {
        handleAxiosFieldErrors<CreateUser>(error, setError, t("users.create.error"));
      },
    });
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      reset();
    }

    onOpenChange(open);
  };

  return (
    <Dialog.Root onOpenChange={handleOpenChange} open={isOpen}>
      <Dialog.Content isDismissible={!isCreating}>
        <Dialog.Header>
          <Dialog.Title>{t("users.create.title")}</Dialog.Title>

          <Dialog.Description>{t("users.create.description")}</Dialog.Description>
        </Dialog.Header>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">{t("form.name")}</Label>

            <Input {...register("name")} id="name" size="sm" />

            <ErrorMessage errorMessage={errors?.name?.message} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="emailAddress">{t("form.email")}</Label>

            <Input {...register("emailAddress")} id="emailAddress" size="sm" />

            <ErrorMessage errorMessage={errors?.emailAddress?.message} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">{t("form.password")}</Label>

            <PasswordInput {...register("password")} id="password" size="sm" />

            <ErrorMessage errorMessage={errors?.password?.message} />

            <PasswordValidator control={control} name="password" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="passwordConfirmation">{t("form.confirmPassword")}</Label>

            <PasswordInput
              {...register("passwordConfirmation")}
              id="passwordConfirmation"
              size="sm"
            />

            <ErrorMessage errorMessage={errors?.passwordConfirmation?.message} />
          </div>

          <Dialog.Footer>
            <Dialog.Close disabled={isCreating} asChild>
              <Button variant="outlined">{t("buttons.cancel")}</Button>
            </Dialog.Close>

            <Button isLoading={isCreating} type="submit">
              {t("buttons.create")}
            </Button>
          </Dialog.Footer>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
