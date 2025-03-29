import { CTABtn } from "@/components/ui/CTABtn";
import {
  GlobalPaddingXWrapper,
  GlobalPaddingYWrapper,
} from "@/components/wrappers/GlobalPaddingWrapper";
import { SecondaryBtn } from "@/components/ui/SecondaryBtn";
import { MaxWidthWrapper } from "@/components/wrappers/MaxWidthWrapper";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { currentPageUrlAtom } from "@/store";
import { UniversitySlider } from "@/components/UniversitySlider";
import { SectionH1 } from "@/components/ui/SectionH1";
import { ScheduleCallForm } from "@/components/ScheduleCallForm";

export const HomePage = () => {
  const [_, setCurrentPageUrl] = useAtom(currentPageUrlAtom);
  const url = useLocation();

  useEffect(() => {
    setCurrentPageUrl(url.pathname);
  }, []);

  return (
    <main>
      <section
        id="hero-section"
        className="bg-linear-to-bl from-cta to-cta-darker text-white"
      >
        <GlobalPaddingXWrapper>
          <GlobalPaddingYWrapper>
            <MaxWidthWrapper>
              <div className="items-center justify-center grid grid-flow-row lg:grid-cols-2 gap-3">
                <div>
                  <SectionH1 className="mb-5">
                    Your one stop solution to Study Abroad!
                  </SectionH1>
                  <p className="mb-8 text-base md:text-lg">
                    Best consulting service for studing abroad.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <CTABtn to="/book-a-session">Book a free Session</CTABtn>
                    <SecondaryBtn to="/#contact-us">Contact Us</SecondaryBtn>
                  </div>
                </div>
                <img src="/model.avif" className="w-full" />
              </div>
            </MaxWidthWrapper>
          </GlobalPaddingYWrapper>
        </GlobalPaddingXWrapper>
      </section>

      <section
        id="universities-marquee-section"
        className="flex flex-col items-center my-10"
      >
        <GlobalPaddingXWrapper>
          <MaxWidthWrapper>
            <h1 className="test-sm @xs:text-base sm:text-lg md:text-xl font-bold py-8">
              Our students pursue their studies at
            </h1>
          </MaxWidthWrapper>
        </GlobalPaddingXWrapper>
        <UniversitySlider />
      </section>

      <section id="book-free-setion" className="">
        <GlobalPaddingXWrapper>
          <GlobalPaddingYWrapper>
            <MaxWidthWrapper>
              <div className="items-center justify-center grid grid-rows-1 lg:grid-cols-2 lg:shadow-lg rounded-md">
                <ScheduleCallForm
                  formTitle="Get in touch"
                  className="order-1 lg:order-0"
                />
                <div
                  className="w-full h-full rounded-r-md bg-center bg-cover"
                  style={{
                    backgroundImage: "url(/abroad_university_img.jpg)",
                  }}
                ></div>
              </div>
            </MaxWidthWrapper>
          </GlobalPaddingYWrapper>
        </GlobalPaddingXWrapper>
      </section>
    </main>
  );
};
