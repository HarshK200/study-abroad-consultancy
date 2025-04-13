import { Input } from "@/components/ui/Input";
import {
  GlobalPaddingXWrapper,
  GlobalPaddingYWrapper,
} from "./wrappers/GlobalPaddingWrapper";
import { MaxWidthWrapper } from "./wrappers/MaxWidthWrapper";
import { SecondaryBtn } from "./ui/SecondaryBtn";
import {
  MORE_LINKS,
  SCHOLARSHIPS,
  STUDY_DESTINATIONS,
  TEST_PREP_OPTIONS,
} from "@/utils/constants";
import { FooterLink } from "./ui/FooterLink";
import { cn } from "@/utils/cn";
import { useState } from "react";

export const Footer = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState<string>("");

  return (
    <footer>
      <GlobalPaddingYWrapper className={cn("", className)}>
        <GlobalPaddingXWrapper>
          <MaxWidthWrapper className="text-sm">
            <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr_1.5fr] md:grid-cols-4 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <h3 className="font-bold py-2">STUDY DESTS</h3>
                {STUDY_DESTINATIONS.map((destination) => (
                  <FooterLink
                    key={destination}
                    to={
                      "/study-destinations/" +
                      destination.toLowerCase().replaceAll(" ", "-")
                    }
                  >
                    {destination}
                  </FooterLink>
                ))}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold py-2">SCHOLARSHIPS</h3>
                {SCHOLARSHIPS.map((scholarship) => (
                  <FooterLink
                    key={scholarship}
                    to={
                      "/scholarships/" +
                      scholarship.toLowerCase().replaceAll(" ", "-")
                    }
                  >
                    {scholarship}
                  </FooterLink>
                ))}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold py-2">TEST PREP</h3>
                {TEST_PREP_OPTIONS.map((option) => (
                  <FooterLink
                    key={option}
                    to={
                      "/testprep/" + option.toLowerCase().replaceAll(" ", "-")
                    }
                  >
                    {option}
                  </FooterLink>
                ))}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold py-2">MORE</h3>
                {MORE_LINKS.map((link) => (
                  <FooterLink
                    key={link}
                    to={link.toLowerCase().replaceAll(" ", "-")}
                  >
                    {link}
                  </FooterLink>
                ))}
              </div>
              <div className="flex flex-col lg:col-span-1 sm:col-span-2">
                <label htmlFor="email-list" className="font-bold py-2">
                  Signup to our mail list
                </label>
                <h3 className="pb-5 text-gray-600">
                  Stay updated with latest exam, news and new opportunities
                </h3>
                <div className="flex gap-4">
                  <Input
                    id="email-list"
                    name="email-list"
                    className="h-full"
                    placeholder="Email address"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    value={email}
                  />
                  <SecondaryBtn
                    onClick={() =>
                      alert(
                        `Your email: ${email}\n(This is a placeholder website so no real emailing here ;>)`,
                      )
                    }
                  >
                    Subscribe
                  </SecondaryBtn>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </GlobalPaddingXWrapper>
      </GlobalPaddingYWrapper>
    </footer>
  );
};

export const OfficeLocMap = () => {
  return (
    <div className="w-full h-[20rem]">
      <iframe
        className="m-0"
        width={"100%"}
        height={"100%"}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=New%20Delhi,%20India+(Hello%20study%20global)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;q=28.581105493903394, 77.05127912189359"
      ></iframe>
    </div>
  );
};
