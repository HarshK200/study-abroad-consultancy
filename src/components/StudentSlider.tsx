import { useState } from "react";
import { StudentCard, StudentCardProps } from "./StudentCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StudentCardDetails: StudentCardProps[] = [
  {
    name: "Oliver",
    profileImageUrl: "/cat_images/cat1.jpg",
    profileImageClassName: "bg-center",
    universityLogo: "/universities_images/Auckland-University-Logo.png",
  },
  {
    name: "Bella",
    profileImageUrl: "/cat_images/cat2.jpg",
    profileImageClassName: "bg-center",
    universityLogo: "/universities_images/Boston-University-Logo.png",
    examScore: "CAT 608",
  },
  {
    name: "Charlie",
    profileImageUrl: "/cat_images/cat3.jpg",
    profileImageClassName: "bg-center",
    universityLogo: "/universities_images/Brown-Unversity-Logo.png",
    examScore: "CAT 696",
  },
  {
    name: "Luna",
    profileImageUrl: "/cat_images/cat4.jpg",
    universityLogo: "/universities_images/Cairo-University-Logo.png",
  },
  {
    name: "Simba",
    profileImageUrl: "/cat_images/cat5.jpg",
    universityLogo: "/universities_images/Chicago-University-Logo.png",
    examScore: "CAT 700",
  },
];

export const StudentSlider = () => {
  const [currentCardIdx, setCurrentCardIdx] = useState<number>(0);

  function showNextCard() {
    setCurrentCardIdx((prev) => {
      if (prev + 1 === StudentCardDetails.length) {
        return 0;
      }

      return prev + 1;
    });
  }

  function showPrevCard() {
    setCurrentCardIdx((prev) => {
      if (prev - 1 < 0) {
        return StudentCardDetails.length - 1;
      }
      return prev - 1;
    });
  }

  return (
    <div className="relative">
      <div
        className="w-full flex relative overflow-hidden"
        style={{
          WebkitMask: "linear-gradient(90deg, transparent, white)",
          mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
        }}
      >
        <div className="flex shrink-0">
          {StudentCardDetails.map((cardDetails) => {
            return (
              <StudentCard
                key={cardDetails.name}
                {...cardDetails}
                currentCardIdx={currentCardIdx}
              />
            );
          })}
        </div>
      </div>
      <button
        className="absolute left-[20px] top-[50%] cursor-pointer"
        onClick={showPrevCard}
      >
        <ChevronLeft className="size-10" />
      </button>
      <button
        className="absolute right-[20px] top-[50%] cursor-pointer"
        onClick={showNextCard}
      >
        <ChevronRight className="size-10" />
      </button>
    </div>
  );
};
