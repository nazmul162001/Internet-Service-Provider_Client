import Link from "next/link";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const BecomeClient = () => {
  return (
    <section className="relative w-full my-8 md:my-16 h-96 overflow-hidden bg-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="w-full h-full flex justify-center items-center relative z-10 text-white">
        <div className="text-center">
          <h4 className="font-bold text-lg md:text-xl">
            Gain a Success With Us!
          </h4>
          <h2 className="text-2xl py-4 md:text-6xl font-bold">
            Best Internet Service Provider
          </h2>
          <h3 className="text-lg md:text-4xl font-bold">
            For One Stop Smart Internet Solutions.
          </h3>
          <div className="my-5">
            <Link href="/contact">
              <PrimaryButton title="Become a Client" bgColor="bg_two" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeClient;
