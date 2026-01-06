# Tailwind & Variants Guidelines for AI Code Assistants

This file contains Tailwind CSS and tailwind-variants standards optimized for AI code assistants like Claude Code, GitHub Copilot, and Cursor. These guidelines are aligned with our internal decision to standardize variant management via tailwind-variants.

## Core Frontend Principle

Follow project conventions first. Only deviate with clear justification.

## Activation Trigger

This rule applies whenever you are asked to create a UI component that requires conditional styling, variants, different states, or themes (e.g., primary/secondary buttons, sizes, light/dark modes). If the request is for a simple, static component with no variants, this rule can be ignored and styles must be added inline.

## Mandatory Procedure

1. Use the tailwind-variants library

- All component styles involving variants must be defined using `tv()` from `tailwind-variants` only if it's needed.

2. Strict structure for `tv()` configuration

- Keys must appear in this exact order:
  - `base`
  - `slots` (only if applicable)
  - `variants`
  - `compoundVariants` (only if applicable)
  - `defaultVariants`

3. Correctly implement slots

- Use slots for multi-part components where a sub-element’s style depends on the parent’s variants (e.g., a button icon changing color based on the button’s variant).
- Do NOT use slots for single-element components, for organizing static classes without variant logic, or to avoid duplication that should be handled with Tailwind utilities.

4. Naming conventions

- The final output must be a single `const` named in camelCase and ending with the `Variants` suffix.
- Examples: `const buttonVariants = tv({...});`, `const cardVariants = tv({...});`

5. Ensure completeness

- Always define `base` for common, unconditional classes.
- If you define any variants, you must also define `defaultVariants` to ensure predictable defaults.

## Output Checklist

- Use `tv()` for variants and states.
- Respect the exact key order: `base` → `slots` → `variants` → `compoundVariants` → `defaultVariants`.
- Use `slots` only when there is real variant dependency between sub-parts.
- Create a single camelCase `const` with the `Variants` suffix.
- Include `base` and `defaultVariants` whenever variants exist.
- Use `compoundVariants` only for complex state combinations when it would be helpful.

## Minimal Template (no slots)

```ts
import { tv } from "tailwind-variants";

const componentNameVariants = tv({
  base: "",
  variants: {
    // example
    // variant: { primary: "", secondary: "" },
    // size: { sm: "", md: "", lg: "" },
  },
  compoundVariants: [
    // { variant: "primary", size: "sm", className: "" },
  ],
  defaultVariants: {
    // variant: "primary",
    // size: "md",
  },
});
```

## Minimal Template (with slots)

```ts
import { tv } from "tailwind-variants";

const componentNameVariants = tv({
  base: "",
  slots: {
    // header: "",
    // body: "",
    // footer: "",
  },
  variants: {
    // theme: {
    //   light: { base: "", header: "", footer: "" },
    //   dark: { base: "", header: "", footer: "" },
    // },
  },
  compoundVariants: [
    // { theme: "dark", className: { header: "" } },
  ],
  defaultVariants: {
    // theme: "light",
  },
});
```

## TypeScript: VariantProps

Use `VariantProps` to infer prop types directly from your `tv()` configuration so component props stay in sync with your variants.

```ts
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import type { VariantProps } from "tailwind-variants";

// Example: button
type ButtonVariants = VariantProps<typeof buttonVariants>;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

// Example: card (with slots)
type CardVariants = VariantProps<typeof cardVariants>;
type CardProps = PropsWithChildren<CardVariants & { className?: string }>;
```

## Correct Example: Button (no slots)

```ts
import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
    },
    size: {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    },
    state: {
      default: "",
      loading: "opacity-80 cursor-wait",
    },
  },
  compoundVariants: [
    {
      variant: "ghost",
      size: "sm",
      className: "hover:bg-gray-50",
    },
    {
      variant: "primary",
      state: "loading",
      className: "animate-pulse",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    state: "default",
  },
});
```

### Usage in component

```tsx
import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";

type ButtonVariants = VariantProps<typeof buttonVariants>;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

const Button = ({
  variant,
  size,
  state,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, state, className })}
      {...props}
    />
  );
};
```

## Correct Example: Card (with slots)

```ts
import { tv } from "tailwind-variants";

const cardVariants = tv({
  base: "rounded-lg border shadow-sm overflow-hidden",
  slots: {
    header: "p-4 font-semibold border-b",
    body: "p-6",
    footer: "p-4 border-t text-sm",
  },
  variants: {
    theme: {
      light: {
        base: "bg-white text-gray-900 border-gray-200",
      },
      dark: {
        base: "bg-gray-900 text-white border-gray-700",
        header: "border-gray-800",
        footer: "border-gray-800",
      },
    },
    elevation: {
      none: "",
      sm: { base: "shadow" },
      md: { base: "shadow-md" },
    },
  },
  compoundVariants: [
    { theme: "dark", elevation: "md", className: { base: "shadow-black/30" } },
  ],
  defaultVariants: {
    theme: "light",
    elevation: "none",
  },
});

const {
  base,
  header,
  body,
  footer,
} = cardVariants();
```

### Usage in compound component

```tsx
import type { PropsWithChildren } from "react";
import type { VariantProps } from "tailwind-variants";

type CardVariants = VariantProps<typeof cardVariants>;
type CardProps = PropsWithChildren<CardVariants & { className?: string }>;

const Card = ({ theme, elevation, className, children }: CardProps) => {
  return (
    <div className={base({ theme, elevation, className })}>{children}</div>
  );
};

const CardHeader = ({
  theme,
  elevation,
  children,
}: Partial<CardProps>) => {
  return (
    <header className={header({ theme, elevation })}>{children}</header>
  );
};

const CardBody = ({
  theme,
  elevation,
  children,
}: Partial<CardProps>) => {
  return <main className={body({ theme, elevation })}>{children}</main>;
};

const CardFooter = ({
  theme,
  elevation,
  children,
}: Partial<CardProps>) => {
  return (
    <footer className={footer({ theme, elevation })}>{children}</footer>
  );
};
```

## Common Mistakes

- Defining `variants` without `defaultVariants`.
- Using `slots` for single-element components without real variant dependency.
- Exporting multiple variant constants for the same component.
- Omitting `base` with common styles.
- Repeating styles that should be handled by Tailwind utilities.

## Quick Reference

- Single const in camelCase with `Variants` suffix.
- Always include `base` and, if variants exist, `defaultVariants`.
- Use `slots` only for multi-part components with variant-dependent parts.
- Keep variant names descriptive and consistent across components.

## References

- tailwind-variants documentation: `https://www.tailwind-variants.org/docs/introduction`
- Internal standard: [LI-012] Variant Management in Tailwind CSS Projects

## Final Note for the AI

- If the component does not require variants/states/themes, do not apply this rule.
- If it does, ALWAYS generate a single `const` with the `Variants` suffix, use `tv()`, and respect the key order.
