type ProvidersFoundProps = {
  countProviders: number;
  textCount: string;
};

export const ProvidersFound = ({ countProviders, textCount }: ProvidersFoundProps) => {
  if (countProviders <= 0) {
    return null;
  }

  return (
    <div className="text-tertiary my-4 flex flex-row gap-1 leading-6 font-medium">
      <p>{countProviders}</p>
      <p>{textCount}</p>
    </div>
  );
};
