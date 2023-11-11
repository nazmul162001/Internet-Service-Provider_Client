import RootLayout from "@/components/Layouts/RootLayouts";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import VisionOverView from "@/components/about/VisionOverView";
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
          About Us
        </h2>
      </div>
      {/* our mission  */}
      <Mission />
      {/* our vision  */}
      <Vision />

      {/* mission & vision overview */}
      <VisionOverView />
    </section>
  );
};

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
