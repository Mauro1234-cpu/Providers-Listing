import { useEffect, useRef } from "react";

import type { ProvidersQueryState } from "@/services/providers/types";
import type { ProviderProps } from "@/types/cards";
import { LoadingState } from "./loading-state";
import { NotFound } from "./not-found";
import { ProviderCard } from "./provider-card";

export const Cards = ({
  fetchNextPage,
  hasNextPage,
  isError,
  isLoading,
  providers,
}: ProvidersQueryState) => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!observerRef.current) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );
    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <div className="p-8 text-center text-red-500">{}</div>;
  }

  if (providers === null) {
    return <NotFound />;
  }

  return (
    <div className="flex w-full flex-col justify-center lg:flex-row lg:flex-wrap lg:gap-8">
      {providers?.map((provider: ProviderProps) => {
        return <ProviderCard key={provider.id} provider={provider} />;
      })}
      <div ref={observerRef} />
    </div>
  );
};
