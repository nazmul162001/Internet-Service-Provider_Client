import ContactForm from "@/components/Contact/ContactForm";
import RootLayout from "@/components/Layouts/RootLayouts";
import { ReactElement } from "react";

const Contact = () => {
  return (
    <section className="w-full">
      <div
        style={{
          background: `url('/contact.png')`,
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

      {/* contact form  */}
      <ContactForm />
    </section>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
