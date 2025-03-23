import { Link } from "react-router-dom";

interface buttonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export const CTABtn = ({ children, to, className }: buttonProps) => {
  return (
    <Link
      to={to}
      className={`whitespace-nowrap flex items-center justify-center cursor-pointer px-3 py-1.5 rounded-md bg-white text-black border-[2px] border-cta ${className}`}
    >
      {children}
    </Link>
  );
};
