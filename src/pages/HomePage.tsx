import { CTABtn } from "@/components/ui/CTABtn";
import { GlobalPaddingWrapper } from "@/components/wrappers/GlobalPaddingWrapper";
import { SecondaryBtn } from "@/components/ui/SecondaryBtn";
import { MaxWidthWrapper } from "@/components/wrappers/MaxWidthWrapper";

export const HomePage = () => {
  return (
    <main>
      <section id="hero-section" className="bg-cta text-white">
        <GlobalPaddingWrapper>
          <MaxWidthWrapper>
            <div className="py-16 md:py-24 lg:py-20 items-center justify-center grid auto-cols-fr grid-flow-row lg:grid-cols-2 gap-3">
              <div>
                <h1 className="font-bold text-4xl mb-5">
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
