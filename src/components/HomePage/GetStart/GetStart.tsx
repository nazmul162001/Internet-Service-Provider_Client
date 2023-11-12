import React from "react";
import PrimaryButton from "../../Button/PrimaryButton";
import Link from "next/link";

const GetStart = () => {
  return (
    <section className="w-full h-full mb-10 px-5 md:px-10 bg-white">
      <div
        style={{
          background: `url('/footer_bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-96 flex justify-center items-center rounded-lg"
      >
        <div>
          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            Stay connected with the right <br /> NetFx Internet service
          </h1>
          <p className="py-5 text-center text-white font-sans font-normal text-lg">
            Get a price you’ll love and the reliability you deserve.
          </p>

          <div className="flex justify-center items-center">
            <Link href="/contact">
              <PrimaryButton title="Let’s get stared" bgColor="bg_one" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStart;
