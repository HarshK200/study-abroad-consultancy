import { Marquee, MarqueeChild } from "./ui/Marquee";

const universityUrls: string[] = [
  "/universities_images/Brown-Unversity-Logo.png",
  "/universities_images/Cairo-University-Logo.png",
  "/universities_images/Otago-University-Logo.png",
  "/universities_images/Boston-University-Logo.png",
  "/universities_images/Chicago-University-Logo.png",
  "/universities_images/Cornell-University-Logo.png",
  "/universities_images/Harvard-University-Logo.png",
  "/universities_images/Auckland-University-Logo.png",
  "/universities_images/Columbia-University-Logo.png",
  "/universities_images/university-of-birmingham.png",
  "/universities_images/washington-university-logo.png",
  "/universities_images/Northwestern-University-Logo.png",
];

export const UniversitySlider = () => {
  return (
    <Marquee classNameOuter="mb-8">
      {universityUrls.map((url, idx) => (
        <MarqueeChild key={url} index={idx} className="size-20 md:size-28">
          <img src={url} />
        </MarqueeChild>
      ))}
    </Marquee>
  );
};
