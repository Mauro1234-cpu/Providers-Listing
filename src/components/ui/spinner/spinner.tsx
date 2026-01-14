import { tv } from "tailwind-variants";

const spinnerVariants = tv({
  slots: {
    spin: "flex size-5 animate-spin items-center justify-center rounded-full bg-conic-360 from-background-base-tertiary-hover/0 to-background-base-tertiary-hover",
    circle: "size-3 rounded-full bg-background-disabled-default",
  },
});

const { circle, spin } = spinnerVariants();

export const Spinner = () => {
  return (
    <div className={spin()}>
      <p className={circle()} />
    </div>
  );
};
