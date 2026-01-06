import en from "./locales/en.json";

const resources = { en } as const;

declare module "i18next" {
  type CustomTypeOptions = {
    defaultNS: "en";
    resources: typeof resources;
  };
}
