type HeaderProps = {
  title: string;
  description: string;
};

export const Header = ({ description, title }: HeaderProps) => {
  return (
    <div>
      <h1 className="py-2 font-sans text-3xl font-medium text-text-default-default">{title}</h1>
      <p className="text-text-default-secondary">{description}</p>
    </div>
  );
};
