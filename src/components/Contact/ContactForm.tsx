import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { BiWorld } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  number: number;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <section className="w-full px-5 md:px-16 my-8">
      <div className="bg-white w-full p-5 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#112164]">
            Let's Talk about Your Business
          </h2>
          <div className="w-full">
            <div className="w-28 h-[2px] bg-gray-300 my-2"></div>
          </div>
          {/* form  */}
          <form onSubmit={handleSubmit(onSubmit)} className="my-8">
            <div className="flex gap-3">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="border-2 w-full pl-4 py-2 font-bold text-lg border-gray-300"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="border-2 w-full pl-4 py-2 font-bold text-lg border-gray-300"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                )}
              />
            </div>
            <div className="flex gap-3 my-5">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="border-2 w-full pl-4 py-2 font-bold text-lg border-gray-300"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                )}
              />
              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="border-2 w-full pl-4 py-2 font-bold text-lg border-gray-300"
                    type="number"
                    placeholder="Your Phone Number"
                    required
                  />
                )}
              />
            </div>
            <div className="flex gap-3 my-5">
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="border-2 w-full pl-4 py-2 font-bold text-lg border-gray-300"
                    type="text"
                    placeholder="Subject"
                    required
                  />
                )}
              />
            </div>
            <div className="flex gap-3 my-5">
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    style={{ minHeight: "80px" }}
                    className="border-2 w-full pl-4 py-2 font-bold text-lg border-gray-300"
                    placeholder="Message"
                    required
                  />
                )}
              />
            </div>
            <div className="my-5">
              <button
                type="submit"
                className="w-full py-2 text-center bg_two text-white font-bold text-lg hover:bg-[#4DDFFD]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="md:pl-5">
          <div className="flex gap-3 items-center border-b-2 border-gray-200 pb-4 my-5 md:my-12">
            <div className="w-16 h-16 rounded-full bg-[#112164] flex justify-center items-center text-white">
              <span>
                <FiPhoneCall className="text-2xl" />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold">Call Us</span>
              <span className="text-gray-500 text-lg font-medium">
                091111111111, 4121212121
              </span>
            </div>
          </div>

          <div className="flex gap-3 items-center border-b-2 border-gray-200 pb-4 my-5 md:my-12">
            <div className="w-16 h-16 rounded-full bg-[#112164] flex justify-center items-center text-white">
              <span>
                <HiOutlineMailOpen className="text-2xl" />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold">Email</span>
              <span className="text-gray-500 text-lg font-medium">
                webdevnazmulh@gmail.com
              </span>
            </div>
          </div>

          <div className="flex gap-3 items-center border-b-2 border-gray-200 pb-4 my-5 md:my-12">
            <div className="w-16 h-16 rounded-full bg-[#112164] flex justify-center items-center text-white">
              <span>
                <BiWorld className="text-2xl" />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold">Our Corporate Office</span>
              <span className="text-gray-500 text-lg font-medium">
                Navana Tower (7th floor) 45 Gulshan South C/A, <br /> Circle 1,
                Dhaka - 1212, Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
