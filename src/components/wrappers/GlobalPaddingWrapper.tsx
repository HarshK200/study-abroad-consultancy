import { cn } from "@/utils/cn";

export const GlobalPaddingXWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="px-8 md:px-20">{children}</div>;
};

export const GlobalPaddingYWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("py-12 md:py-12 lg:py-14", className)}>{children}</div>
  );
};
