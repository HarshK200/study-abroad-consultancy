export const MaxWidthWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="mx-auto max-w-[1310px]">{children}</div>;
};
