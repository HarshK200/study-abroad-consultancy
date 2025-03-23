import { Link } from "react-router-dom";
import { cn } from "@/utils/cn.ts";

interface buttonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export const CTABtn = ({ children, to, className }: buttonProps) => {
  return (
    <Link
      to={to}
      className={cn(
        `whitespace-nowrap flex items-center justify-center cursor-pointer px-3 py-3 rounded-md bg-white text-black ${className}`,
      )}
    >
      {children}
    </Link>
  );
};
