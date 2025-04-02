import { cn } from "@/utils/cn";

export const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto max-w-[1310px]", className)}>{children}</div>
  );
};
