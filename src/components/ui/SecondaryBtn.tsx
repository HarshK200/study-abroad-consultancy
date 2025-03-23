import { currentPageUrlAtom } from "@/store";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

interface buttonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export const SecondaryBtn = ({ children, to, className }: buttonProps) => {
  const [_, setUrl] = useAtom(currentPageUrlAtom);

  return (
    <Link
      to={to}
      onClick={() => setUrl(to)}
      className={`w-fit whitespace-nowrap text-center cursor-pointer px-5 py-3 rounded-md text-black bg-secondary ${className}`}
    >
      {children}
    </Link>
  );
};
