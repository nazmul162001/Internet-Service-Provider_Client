import Link from "next/link";
import PrimaryButton from "../Button/PrimaryButton";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="w-full px-5 md:px-16">
      <div className="bg-white w-full p-5 rounded-lg">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#112164]">
          Welcome To NetFX
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-28 h-[2px] bg-gray-300 my-2"></div>
        </div>
        <p className="text-[#6c757d] py-4 md:text-lg">
          NetFX is not simply another link in the chain of voice and data supply
          in the Bangladesh. Our pioneering spirit is evidenced by the creation
          of a national, fully resilient, MPLS network and the continuous
          testing and adoption of emerging communications platforms. As a
          result, we have earned the reputation of a communications provider
          whose focus is on solidly addressing businesses' communications
          requirements.
        </p>

        <div className="grid grid-cols-12 py-8">
          <div className="grid col-span-12 md:col-span-4 p-4 md:p-8">
            <Image
              className="w-full h-full"
              src="/about-mission.png"
              layout="responsive"
              width={200}
              height={200}
              alt="mission/image"
            />
          </div>

          <div className="grid col-span-12 md:col-span-8">
            <p className="text-[#6c757d] py-4 leading-7 lg:text-lg">
              We are dedicated to serving customers. We achieve this not only
              through our extensive portfolio of internet/data connectivity, IP
              telephony and related services but also by simplifying the process
              of ordering, provisioning and supporting them. NetFX is a concern
              of NetFX Group, a conglomerate comprising 20 companies across
              diverse industries.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:text-lg">
              <li>Corporate Internet & Data Connectivity</li>
              <li>High Quality & Reliable IPTSP Service</li>
              <li>Safe & Smarter Home Internet</li>
              <li>Secured Hosting & Web Development</li>
            </div>
            <div className="my-5">
              <Link href="/contact">
                <PrimaryButton title="Contact" bgColor="bg_two" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
