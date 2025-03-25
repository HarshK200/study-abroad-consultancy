export const GlobalPaddingXWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="px-8 md:px-20">{children}</div>;
};

export const GlobalPaddingYWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="py-12 md:py-12 lg:py-14">{children}</div>;
};
