import { cn } from "@/utils/cn";

export const Marquee = ({
  children,
  classNameOuter,
  classNameInner,
}: {
  children: React.ReactNode;
  classNameOuter?: string;
  classNameInner?: string;
}) => {
  return (
    <div
      className={cn("w-full overflow-hidden", classNameOuter)}
      style={{
        WebkitMask: "linear-gradient(90deg, transparent, white)",
        mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <div
        className={cn(
          "w-fit flex bg-white animate-scroll-left",
          classNameInner,
        )}
      >
        {children}
        <div aria-hidden="true" className="flex">
          {children}
        </div>
      </div>
    </div>
  );
};

export const MarqueeChild = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  index: number;
}) => {
  return (
    <div className={cn("flex items-center shrink-0 size-28 mx-10", className)}>
      {children}
    </div>
  );
};
