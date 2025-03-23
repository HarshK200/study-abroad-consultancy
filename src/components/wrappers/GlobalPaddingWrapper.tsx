export const GlobalPaddingWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="mx-auto px-10 md:px-20">{children}</div>;
};
