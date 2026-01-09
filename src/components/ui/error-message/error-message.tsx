export type ErrorMessageProps = {
  errorMessage?: string;
};

export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <p className="text-xs leading-4 font-light text-text-danger-on-danger-tertiary">
      {errorMessage}
    </p>
  );
};
