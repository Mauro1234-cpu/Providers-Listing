type ProvidersFoundProps = {
  countProviders: number | null | undefined;
  textCount: string;
};

export const ProvidersFound = ({ countProviders, textCount }: ProvidersFoundProps) => {
  return (
    <div className="my-1 flex flex-row gap-1 leading-6 font-medium text-text-default-tertiary">
      <p>{countProviders}</p>
      <p>{textCount}</p>
    </div>
  );
};
