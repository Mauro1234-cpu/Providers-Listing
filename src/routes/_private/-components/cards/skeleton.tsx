export const Skeleton = () => {
  return (
    <div className="flex w-full flex-col justify-center pt-12 lg:flex-row lg:flex-wrap lg:gap-8">
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <div
            className="border-border-primary flex aspect-3/4 animate-pulse flex-col overflow-hidden rounded-xl border lg:w-1/4"
            key={index}
          >
            <div className="bg-gray-hover h-2/4 w-full" />
            <div className="flex w-full flex-col gap-3 bg-white px-5 pt-5">
              <div className="bg-gray-hover h-7 w-3/4 rounded-md" />
              <div className="bg-gray-hover h-6 w-2/4 rounded-md" />

              <div className="my-3 flex h-30 w-full flex-col">
                <div className="flex w-3/4 flex-row items-center gap-1">
                  <div className="bg-gray-hover size-5 rounded-full" />
                  <div className="bg-gray-hover h-5 flex-1 rounded-md" />
                </div>

                <div className="my-3 flex w-3/4 flex-row items-center gap-1">
                  <div className="size-5" />
                  <div className="bg-gray-hover h-5 flex-1 rounded-md" />
                </div>

                <div className="bg-gray-hover mt-3 h-10 w-full rounded-md" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
