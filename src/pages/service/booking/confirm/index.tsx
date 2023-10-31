import Image from "next/image";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const ConfirmBooking = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-white min-h-screen px-5 md:px-10 flex justify-center items-center">
      <div className="">
        <h2 className=" mb-8 text-4xl md:text-5xl lg:text-7xl font-bold text-[#182141] text-center">
          Thank You!
        </h2>
        <div className="w-full flex justify-center items-center">
          <Image
            src="/confirm.png"
            width={300}
            height={300}
            alt="confirm/image"
          />
        </div>
        <div className="mt-8">
          <h3 className="text-2xl text-center text-[#182141af]">
            Thanks for Booking service! We will Contact with you within 3/5
            working days.
          </h3>
        </div>
        <div className="flex justify-center items-center gap-3 mt-5">
          <button
            onClick={() => router.push("/")}
            className="flex justify-center items-center gap-2 px-5 md:px-10 py-1 bg-[#D4EFE2] hover:bg-green-300 transition-all duration-200 text-lg"
          >
            <CaretLeftOutlined /> Back To Home
          </button>
          <button
            onClick={() => router.push("/dashboard/booking")}
            className="flex justify-center items-center gap-2 px-5 md:px-10 py-1 bg-[#D4EFE2] hover:bg-green-300 transition-all duration-200 text-lg"
          >
            {" "}
            Booking Status
            <CaretRightOutlined />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmBooking;
