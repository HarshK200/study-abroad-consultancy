import { CTABtn } from "@/components/ui/CTABtn";
import { GlobalPaddingWrapper } from "@/components/wrappers/GlobalPaddingWrapper";
import { SecondaryBtn } from "@/components/ui/SecondaryBtn";
import { MaxWidthWrapper } from "@/components/wrappers/MaxWidthWrapper";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { currentPageUrlAtom } from "@/store";

export const HomePage = () => {
  const [_, setCurrentPageUrl] = useAtom(currentPageUrlAtom);
  const url = useLocation();

  useEffect(() => {
    setCurrentPageUrl(url.pathname);
  }, []);

  return (
    <main>
      <section id="hero-section" className="bg-cta text-white">
        <GlobalPaddingWrapper>
          <MaxWidthWrapper>
            <div className="py-12 md:py-12 lg:py-14 items-center justify-center grid auto-cols-fr grid-flow-row lg:grid-cols-2 gap-3">
              <div>
                <h1 className="font-bold text-3xl md:text-4xl mb-5">
                  Your one stop solution to Study Abroad!
                </h1>
                <p className="mb-8 text-lg">
                  Best consulting service for studing abroad.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <CTABtn to="book-a-session">Book a free Session</CTABtn>
                  <SecondaryBtn to="#contact-us">Contact Us</SecondaryBtn>
                </div>
              </div>
              <img src="/model.avif" className="w-full" />
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-lg">Our students pursue their studies at</h1>
              <div className="flex"></div>
            </div>
          </MaxWidthWrapper>
        </GlobalPaddingWrapper>
      </section>

      <section id="book-free-setion" className="">
        <h1 className="text-3xl font-bold py-10 text-center">
          Book a free session
        </h1>
      </section>
    </main>
  );
};
