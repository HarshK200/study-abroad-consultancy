import { GlobalPaddingYWrapper } from "./wrappers/GlobalPaddingWrapper";

export const Footer = () => {
  return (
    <GlobalPaddingYWrapper>
      <div className="flex justify-center">
        <div className="w-[18rem] h-[12rem] sm:w-[30rem] sm:h-[18rem] lg:w-[30rem] lg:h-[20rem]">
          <iframe
            className="m-0"
            width={"100%"}
            height={"100%"}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=New%20Delhi,%20India+(Hello%20study%20global)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;q=28.581105493903394, 77.05127912189359"
          ></iframe>
        </div>
      </div>
    </GlobalPaddingYWrapper>
  );
};
