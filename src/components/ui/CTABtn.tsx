import { Link } from "react-router-dom";
import { cn } from "@/utils/cn.ts";
import { useAtom } from "jotai";
import { currentPageUrlAtom } from "@/store";

interface buttonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export const CTABtn = ({ children, to, className }: buttonProps) => {
  const [_, setUrl] = useAtom(currentPageUrlAtom);

  return (
    <Link
      to={to}
      onClick={() => setUrl(to)}
      className={cn(
        `w-fit whitespace-nowrap flex items-center justify-center cursor-pointer px-3 py-3 rounded-md bg-white text-black ${className}`,
      )}
    >
      {children}
    </Link>
  );
};
