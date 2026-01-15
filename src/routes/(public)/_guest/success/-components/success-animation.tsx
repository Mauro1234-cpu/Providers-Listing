import { Icons } from "@/components";

export const SuccessAnimation = () => {
  return (
    <>
      <style>
        {`@layer utilities {
                @keyframes draw {
                    to {
                    stroke-dashoffset: 0;
                    }
                }

                @keyframes complete {
                    to {
                    opacity: 1;
                    fill: var(--green-500);
                    }
                }

                @keyframes check {
                    to {
                    opacity: 1;
                    }
                }
                .animate-draw {
                    animation: draw 1s linear forwards;
                }

                .animate-complete {
                    animation: complete 0.4s ease forwards;
                    animation-delay: 1s;
                }

                .animate-check {
                    animation: check 0.4s ease forwards;
                    animation-delay: 1s;
                }
            }`}
      </style>
      <svg height="150" width="150">
        <circle
          className="animation animate-draw origin-center -rotate-60 transform fill-none stroke-text-success-tertiary"
          cx={75}
          cy={75}
          pathLength={100}
          r={28}
          strokeDasharray="440"
          strokeDashoffset="-440"
          strokeLinecap="round"
          strokeWidth={2}
        />

        <circle
          className="animate-complete stroke-text-success-tertiary opacity-0"
          cx={75}
          cy={75}
          r={28}
          strokeLinecap="round"
          strokeWidth={1}
        />

        <foreignObject className="animate-check opacity-0" height={45} width={45} x={53} y={53}>
          <Icons.Check className="size-full text-background-default-default" strokeWidth={40} />
        </foreignObject>
      </svg>
    </>
  );
};
