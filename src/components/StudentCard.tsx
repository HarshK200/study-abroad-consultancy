import { cn } from "@/utils/cn";

export interface StudentCardProps extends React.HTMLProps<HTMLDivElement> {
  profileImageUrl: string;
  profileImageClassName?: string;
  cardClassName?: string;
  name: string;
  universityLogo?: string;
  examScore?: string;
  currentCardIdx?: number;
}

export const StudentCard = ({
  name,
  cardClassName,
  profileImageUrl,
  profileImageClassName,
  universityLogo,
  examScore,
  currentCardIdx,
  ...props
}: StudentCardProps) => {
  return (
    <div
      className={cn(
        "mx-10 py-4 flex flex-col items-center justify-center shadow-2xl rounded-md bg-white text-black",
        cardClassName,
      )}
      style={{
        translate: currentCardIdx ? `${-100 * (currentCardIdx || 0)}%` : "",
        transition: "translate 300ms ease-in-out",
      }}
      {...props}
    >
      <div
        className={cn(
          "size-36 mx-16 rounded-full shadow-lg bg-cover",
          profileImageClassName,
        )}
        style={{ backgroundImage: `url(${profileImageUrl})` }}
      ></div>
      <h1 className="text-lg py-5">{name}</h1>
      {examScore && (
        <h1 className="py-2 px-8 shadow-md bg-cta text-white font-bold rounded-full">
          {examScore}
        </h1>
      )}
      <div className="px-14 h-fit w-56 mt-3">
        <img loading="lazy" src={universityLogo} className="rounded-md" />
      </div>
    </div>
  );
};
