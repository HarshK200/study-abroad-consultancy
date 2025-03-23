import { Link } from "react-router-dom";

interface buttonProps {
  className?: string;
  children: React.ReactNode;
  to: string;
  setIsSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavActionLink = ({
  children,
  to,
  className,
  setIsSidebarOpen,
}: buttonProps) => {
  return (
    <Link
      to={to}
      onClick={() => {
        if (setIsSidebarOpen) setIsSidebarOpen(false);
      }}
      className={`hover:text-cta whitespace-nowrap w-full mx-3 my-3 flex items-start font-normal cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
};
