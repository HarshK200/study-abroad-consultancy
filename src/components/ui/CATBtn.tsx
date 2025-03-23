import { Link } from "react-router-dom";

interface buttonProps {
  children: React.ReactNode;
  to: string;
  className: string;
}

export const CTABtn = ({ children, to, className }: buttonProps) => {
  return (
    <Link
      to={to}
      className={`whitespace-nowrap cursor-pointer h-fit px-5 py-2.5 rounded-full bg-cta text-white font-bold ${className}`}
    >
      {children}
    </Link>
  );
};
