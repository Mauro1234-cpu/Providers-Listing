import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { Button, Dialog } from "@/components";
import { useDeleteUser, type User } from "@/services";

type DeleteUserDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  user: User;
};

export const DeleteUserDialog = ({ isOpen, onOpenChange, user }: DeleteUserDialogProps) => {
  const { t } = useTranslation();

  const { isPending, mutate: deleteUser } = useDeleteUser();

  const handleDelete = async () => {
    deleteUser(user.id, {
      onSuccess: () => {
        toast.success(t("users.table.columns.actions.deletionSuccess", { name: user.name }));
      },
      onError: () => {
        toast.error(t("users.table.columns.actions.deletionError", { name: user.name }));
      },
      onSettled: () => {
        onOpenChange(false);
      },
    });
  };

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={isOpen}>
      <Dialog.Content isDismissible={!isPending}>
        <Dialog.Header>
          <Dialog.Title>{t("users.table.columns.actions.areYouAbsolutelySure")}</Dialog.Title>

          <Dialog.Description>
            {t("users.table.columns.actions.thisActionCantBeUndone", { name: user.name })}
          </Dialog.Description>
        </Dialog.Header>

        <Dialog.Footer>
          <Dialog.Close disabled={isPending} asChild>
            <Button variant="outlined">{t("buttons.cancel")}</Button>
          </Dialog.Close>

          <Button isLoading={isPending} onClick={handleDelete} type="submit">
            {t("buttons.confirm")}
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
};
