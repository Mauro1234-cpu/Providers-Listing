import type { FilterState } from "@/types/filters";

export const Cards = ({ filters }: { filters: FilterState }) => {
  // const { error, loading, providers } = useProviders({ filters });
  // const { data, error, isError, isLoading } = Providers({ filters });

  // if (isLoading) {
  //   return <LoadingState />;
  // }

  // if (error) {
  //   return <div className="p-8 text-center text-red-500">{error}</div>;
  // }

  // if (data.length === 0) {
  //   return <NotFound />;
  // }

  return (
    <div className="flex w-full flex-col justify-center lg:flex-row lg:flex-wrap lg:gap-8">
      {/* {providers.map((provider) => {
        return <ProviderCard key={provider.id} provider={provider} />;
      })} */}
    </div>
  );
};
