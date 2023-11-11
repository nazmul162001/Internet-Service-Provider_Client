import { useForm, Controller, SubmitHandler } from "react-hook-form";

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
      <div className="bg-white w-full p-5 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    style={{ minHeight: "150px" }}
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
        <div>right side</div>
      </div>
    </section>
  );
};

export default ContactForm;
