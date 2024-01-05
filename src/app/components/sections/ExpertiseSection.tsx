import ExpertiseBox from "./ExpertiseBox";
import { RiReactjsLine } from "react-icons/ri";
import { MdOutlineLogoDev } from "react-icons/md";
import { PiComputerTowerFill } from "react-icons/pi";

export default function ExpertiseSection() {
  return (
    <section
      id="Expertise"
      className="relative box-border w-full p-8 text-white md:p-24 xl:p-72"
    >
      <div className="mb-8 w-full font-mono text-6xl font-semibold [text-shadow:_1px_3px_11px_rgba(0,0,0,0.3)] md:mb-8">
        My Expertise
      </div>
      <div className="relative z-20 flex flex-wrap divide-x-2 border-r-2 border-t-2 md:m-2 md:border-r-0 lg:border-r-2 md:[&>*:nth-child(2)]:!border-r-2 lg:[&>*:nth-child(2)]:!border-r-0">
        <ExpertiseBox
          color="red"
          firstLineTitle="Software"
          secondLineTitle="Development"
          description="Experienced in both functional and OOP: Python, JavaScript, TypeScript."
        >
          <MdOutlineLogoDev size="3rem" />
        </ExpertiseBox>
        <ExpertiseBox
          color="amber"
          firstLineTitle="Frontend Dev"
          secondLineTitle="React, NextJS"
          description="Passionate about UI/UX. Over 6 years of development experience in HTML, CSS, JS, React.js frameworks."
        >
          <RiReactjsLine size="3rem" />
        </ExpertiseBox>
        <ExpertiseBox
          color="blue"
          firstLineTitle="Backend Dev"
          secondLineTitle="NodeJS, Python"
          description="Passionate about building perfornant backend. Over 6 years of development experience of designing highly scalable system."
        >
          <PiComputerTowerFill size="3rem" />
        </ExpertiseBox>
      </div>
      <div className="bg-code-bg border-box absolute bottom-[-200px] left-0 z-0 h-1/3 w-full bg-cover bg-center md:bottom-[-120px]"></div>
    </section>
  );
}
