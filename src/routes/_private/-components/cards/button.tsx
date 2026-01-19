import type { JSX } from "react";
import { twMerge as tw } from "tailwind-merge";

export type ButtonProps = {
  text: string;
  nameBtn: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  icon: JSX.Element;
};

export const Button = ({ icon, nameBtn, selected, setSelected, text }: ButtonProps) => {
  const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.name);
  };

  return (
    <div
      className={tw(
        "flex w-full flex-row items-center justify-center gap-2 rounded-3xl px-7 py-2",
        selected == nameBtn ? "bg-default text-white" : "",
      )}
    >
      <span className={tw("w-5", selected == nameBtn ? "text-white" : "text-primary")}>{icon}</span>
      <button
        className={tw(
          "text-primary text-sm leading-5 font-medium",
          selected == nameBtn ? "text-white" : "",
        )}
        name={nameBtn}
        onClick={HandleClick}
        type="button"
      >
        {text}
      </button>
    </div>
  );
};
