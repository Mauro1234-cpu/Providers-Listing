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
    text: "text-sm leading-5 font-medium",
  },
  variants: {
    selected: {
      true: {
        base: "bg-background-brand-default text-white",
        span: "text-white",
        text: "text-white",
      },
      false: {
        span: "text-text-default-default",
        text: "text-text-default-default",
      },
    },
  },
});

const { base, span, text } = buttonVariants();

export const Button = ({ icon, nameBtn, selected, setSelected, text: label }: ButtonProps) => {
  const isSelected = selected === nameBtn;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.name);
  };

  return (
    <button
      className={base({ selected: isSelected })}
      name={nameBtn}
      onClick={handleClick}
      type="button"
    >
      <span className={span({ selected: isSelected })}>{icon}</span>
      <span className={text({ selected: isSelected })}>{label}</span>
    </button>
  );
};
