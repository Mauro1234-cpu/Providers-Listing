type InfoRowProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

export const InfoRow = ({ children, icon }: InfoRowProps) => {
  return (
    <div className="flex flex-row items-center gap-3 py-1">
      <span aria-hidden="true">{icon}</span>
      <p className="text-text-default-secondary">{children}</p>
    </div>
  );
};
