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
import { getUpdateUserSchema, type UpdateUser, type User, useUpdateUser } from "@/services";
import { handleAxiosFieldErrors } from "@/utils";

type UpdateUserDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  user: User;
};

export const UpdateUserDialog = ({ isOpen, onOpenChange, user }: UpdateUserDialogProps) => {
  const { t } = useTranslation();

  const { isPending: isUpdating, mutate: updateUser } = useUpdateUser();

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(getUpdateUserSchema()),
    values: {
      id: user.id,
      emailAddress: user.emailAddress ?? "",
      name: user.name ?? "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit: SubmitHandler<UpdateUser> = (data) => {
    return updateUser(data, {
      onSuccess: () => {
        toast.success(t("users.update.success"));
        onOpenChange(false);
        reset();
      },
      onError: (error) => {
        handleAxiosFieldErrors<UpdateUser>(error, setError, t("users.update.error"));
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
      <Dialog.Content isDismissible={!isUpdating}>
        <Dialog.Header>
          <Dialog.Title>{t("users.update.title")}</Dialog.Title>

          <Dialog.Description>{t("users.update.description")}</Dialog.Description>
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
            <Dialog.Close disabled={isUpdating} asChild>
              <Button variant="outlined">{t("buttons.cancel")}</Button>
            </Dialog.Close>

            <Button isLoading={isUpdating} type="submit">
              {t("buttons.update")}
            </Button>
          </Dialog.Footer>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
