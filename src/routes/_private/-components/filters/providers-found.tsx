type ProvidersFoundProps = {
  countProviders: number;
  textCount: string;
};

export const ProvidersFound = ({ countProviders, textCount }: ProvidersFoundProps) => {
  if (countProviders <= 0) {
    return null;
  }

  return (
    <div className="my-1 flex flex-row gap-1 leading-6 font-medium text-text-default-tertiary">
      <p>{countProviders}</p>
      <p>{textCount}</p>
    </div>
  );
};
