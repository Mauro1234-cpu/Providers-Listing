export const PROVIDER_TABS = {
  OVERVIEW: "overview",
  LOCATIONS: "locations",
} as const;

export type ProviderTab = (typeof PROVIDER_TABS)[keyof typeof PROVIDER_TABS];
