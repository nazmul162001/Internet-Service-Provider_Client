import RootLayout from "@/components/Layouts/RootLayouts";
import { ReactElement } from "react";

const About = () => {
  return (
    <section className="w-full">
      <div
        style={{
          background: `url('/about.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-64 flex justify-center items-center"
      >
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#112164]">
          Contact Us
        </h2>
      </div>
      <div className="w-full px-16">
        <div className="bg-white w-full p-5 rounded-lg">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#112164]">
            Welcome To NetFX
          </h2>
          <div className="w-full flex justify-center">
            <div className="w-28 h-[2px] bg-gray-300 my-2"></div>
          </div>
          <p className="text-[#6c757d] py-4">
            Amber IT is not simply another link in the chain of voice and data
            supply in the Bangladesh. Our pioneering spirit is evidenced by the
            creation of a national, fully resilient, MPLS network and the
            continuous testing and adoption of emerging communications
            platforms. As a result, we have earned the reputation of a
            communications provider whose focus is on solidly addressing
            businesses' communications requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
