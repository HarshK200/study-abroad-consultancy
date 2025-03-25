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
              <div className="items-center justify-center grid auto-cols-fr grid-flow-row lg:grid-cols-2 gap-3">
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
        className="flex flex-col items-center"
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
              <SectionH1 className="mb-5">
                Guiding you to success step-by-step
              </SectionH1>
            </MaxWidthWrapper>
          </GlobalPaddingYWrapper>
        </GlobalPaddingXWrapper>
      </section>
    </main>
  );
};
