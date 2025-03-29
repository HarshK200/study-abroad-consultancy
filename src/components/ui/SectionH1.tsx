import { cn } from "@/utils/cn";

interface SectionH1Props extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const SectionH1 = ({ children, className }: SectionH1Props) => {
  return (
    <h1 className={cn("font-bold text-3xl md:text-4xl mb-5", className)}>
      {children}
    </h1>
  );
};
