import { Link } from "react-router-dom";

interface buttonProps {
  className?: string;
  children: React.ReactNode;
  to: string;
}

export const NavActionLink = ({ children, to, className }: buttonProps) => {
  return (
    <Link
      to={to}
      className={`hover:text-cta whitespace-nowrap w-full mx-3 my-3 flex items-start font-normal cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
};
