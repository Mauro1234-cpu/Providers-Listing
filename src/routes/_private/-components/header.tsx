import { Logo } from "@/assets/logo";
import { useUser } from "@/services";
import { useUserStoreId } from "@/stores/use-id-store";
import { HamburgerMenu } from "./hamburger-menu";

type HeaderProps = {
  title: string;
  desc: string;
  text: string;
};

export const Header = ({ desc, title }: HeaderProps) => {
  const userId = useUserStoreId();

  const { data, isError, isLoading } = useUser(userId!);

  if (isLoading) {
    return <div>...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const initialsName = (() => {
    if (!data.data.name) {
      return "";
    }

    const nameParts = data.data.name.trim().split(" ");

    const first = nameParts[0]?.charAt(0).toUpperCase() ?? "";
    const last = nameParts[1]?.charAt(0).toUpperCase() ?? "";

    return first + last;
  })();

  return (
    <div className="mx-5 flex flex-row items-center justify-between border-b border-border-default-default py-5 lg:mx-0 lg:px-35">
      <div className="flex flex-row items-center">
        <Logo className="w-11" />
        <div className="mx-3 flex flex-col">
          <h1 className="text-2xl font-semibold text-text-default-default">{title}</h1>
          <p className="text-base text-text-default-tertiary">{desc}</p>
        </div>
      </div>
      <HamburgerMenu text={initialsName || ""} />
    </div>
  );
};
