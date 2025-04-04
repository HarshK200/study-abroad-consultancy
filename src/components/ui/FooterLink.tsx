import { currentPageUrlAtom } from "@/store";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

interface FooterLinkProps {
  children: string;
  to: string;
  className?: string;
}

export const FooterLink = ({ children, to, className }: FooterLinkProps) => {
  const [_, setUrl] = useAtom(currentPageUrlAtom);

  return (
    <Link
      to={to}
      onClick={() => setUrl(to)}
      className={cn("my-1.5 text-gray-600", className)}
    >
      {children}
    </Link>
  );
};
