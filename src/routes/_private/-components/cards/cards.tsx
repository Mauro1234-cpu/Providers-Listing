import { useProviders } from "@/hooks/use-providers";
import type { FilterState } from "@/types/filters";
import { LoadingState } from "./loading-state";
import { NotFound } from "./not-found";
import { ProviderCard } from "./provider-card";

// type CardsProps = {
//     filters: FilterState
// }

export const Cards = ({ filters }: { filters: FilterState }) => {
  const { error, loading, providers } = useProviders({ filters });

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  if (providers.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="flex w-full flex-col justify-center lg:flex-row lg:flex-wrap lg:gap-8">
      {providers.map((provider) => {
        return <ProviderCard key={provider.id} provider={provider} />;
      })}
    </div>
  );
};
