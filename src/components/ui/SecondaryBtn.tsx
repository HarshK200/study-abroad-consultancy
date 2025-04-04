import { currentPageUrlAtom } from "@/store";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

interface buttonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  to?: string;
  className?: string;
}

export const SecondaryBtn = ({
  children,
  to,
  className,
  onClick,
}: buttonProps) => {
  const navigate = useNavigate();
  const [_, setUrl] = useAtom(currentPageUrlAtom);

  function handleClick() {
    if (to) {
      setUrl(to);
      navigate(to);
    }
  }

  return (
    <button
      onClick={onClick ? onClick : handleClick}
      className={`w-fit whitespace-nowrap text-center cursor-pointer px-5 py-3 rounded-md text-black bg-secondary ${className}`}
    >
      {children}
    </button>
  );
};
