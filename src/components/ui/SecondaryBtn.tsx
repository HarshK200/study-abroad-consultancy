import { Link } from "react-router-dom";

interface buttonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export const SecondaryBtn = ({ children, to, className }: buttonProps) => {
  return (
    <Link
      to={to}
      className={`whitespace-nowrap text-center cursor-pointer px-5 py-3 rounded-md text-black bg-secondary ${className}`}
    >
      {children}
    </Link>
  );
};
