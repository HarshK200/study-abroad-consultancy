import { currentPageUrlAtom, sideBarAtom } from "@/store";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface buttonProps {
  className?: string;
  children: React.ReactNode;
  to: string;
}

export const NavActionLink = ({ children, to, className }: buttonProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [_, setIsSidebarOpen] = useAtom(sideBarAtom);
  const [url, setUrl] = useAtom(currentPageUrlAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParsed = url.split("#")[0].split("/").join("");
    const toParsed = to.split("#")[0].split("/").join("");

    urlParsed === toParsed ? setIsActive(true) : setIsActive(false);
  }, [url]);

  return (
    <a
      onClick={() => {
        if (setIsSidebarOpen) setIsSidebarOpen(false);

        setUrl(to);

        navigate(to);
      }}
      className={`hover:text-cta whitespace-nowrap w-full px-3 py-3 flex items-start font-normal cursor-pointer ${isActive ? "border-l-[4px] border-cta xl:border-l-0 xl:border-b-[4px]" : ""} ${isActive ? "bg-secondary" : ""} ${className}`}
    >
      {children}
    </a>
  );
};
