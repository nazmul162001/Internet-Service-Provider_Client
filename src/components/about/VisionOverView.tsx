import Link from "next/link";
import PrimaryButton from "../Button/PrimaryButton";
import Image from "next/image";

const VisionOverView = () => {
  return (
    <section className="px-5 md:px-16 w-full h-full my-8 md:my-16">
      <div className="w-full bg-white py-5 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="flex items-center">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#112164]">
              Mission & vision
            </h2>
            <div className="w-full">
              <div className="w-28 h-[3px] bg-gray-300 my-2"></div>
            </div>

            <p className="text-[#6c757d] lg:text-lg pt-3">
              NetFX is set out to do the things our customers want in an
              Internet service providing company. Which is to provide the most
              reliable service, coupled with the most sophisticated and modern
              equipment available.
            </p>
            <p className="text-[#6c757d] lg:text-lg py-4">
              We envision a world with ease of access and with hassle free
              service. We are striving to be an exceptional citizen in the
              virtual frontier.
            </p>
            <div className="my-5">
              <Link href="/contact">
                <PrimaryButton title="Contact" bgColor="bg_two" />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-8 flex justify-center items-center">
          <Image
            // className="w-full"
            src="/mission-vision.png"
            width={600}
            height={550}
            alt="mission/image"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionOverView;
