import type { JSX } from "react";
import { tv } from "tailwind-variants";

export type ButtonProps = {
  text: string;
  nameBtn: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  icon: JSX.Element;
};

const buttonVariants = tv({
  slots: {
    base: "flex w-full flex-row items-center justify-center gap-2 rounded-3xl px-7 py-2",
    span: "w-5",
    button: "text-sm leading-5 font-medium text-text-default-default",
  },
  variants: {
    selected: {
      true: {
        base: "bg-background-brand-default text-white",
        span: "text-white",
        button: "text-white",
      },
      false: {
        span: "text-text-default-default",
      },
    },
  },
});

const { base, button, span } = buttonVariants();

export const Button = ({ icon, nameBtn, selected, setSelected, text }: ButtonProps) => {
  const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.name);
  };

  const isSelected = selected == nameBtn;

  return (
    <div className={base({ selected: isSelected })}>
      <span className={span({ selected: isSelected })}>{icon}</span>
      <button
        className={button({ selected: isSelected })}
        name={nameBtn}
        onClick={HandleClick}
        type="button"
      >
        {text}
      </button>
    </div>
  );
};
