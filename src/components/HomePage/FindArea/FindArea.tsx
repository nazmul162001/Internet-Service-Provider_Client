import React, { useState, useEffect } from "react";
import PrimaryButton from "../../Button/PrimaryButton";
import { useGetServiceByDistrictAndLocationQuery } from "@/redux/feature/service/serviceApiSlice";
import WhatWeDoCard from "../WhatWeDo/WhatWeDoCard";
import { Spinner } from "@material-tailwind/react";

const FindArea = () => {
  const [district, setDistrict] = useState("");
  const [location, setLocation] = useState("");
  const [buttonText, setButtonText] = useState("Check Availability");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hide, setHide] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    district: "",
    location: "",
    phone: "",
    email: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const capitalizeFirstLetter = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleGetValue = (event: any) => {
    event.preventDefault();

    const districtValue = capitalizeFirstLetter(
      event.target.elements.district.value
    );
    const locationValue = capitalizeFirstLetter(
      event.target.elements.location.value
    );

    setButtonText("Loading");

    // setFormSubmitted(true);
    setTimeout(() => {
      setDistrict(districtValue);
      setLocation(locationValue);
      setFormSubmitted(true);
      setButtonText("Check Availability");
    }, 3000);
  };

  const { data: getServices } = useGetServiceByDistrictAndLocationQuery({
    district,
    location,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Simulate a form submission by setting a loading state for 3 seconds
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowMessage(true);

      // Clear the form inputs
      setFormValues({
        name: "",
        district: "",
        location: "",
        phone: "",
        email: "",
      });
    }, 3000);
  };

  return (
    <section
      id="find"
      className="w-full h-full my-10 px-5 md:px-10 flex justify-center flex-col items-center"
      style={{
        background: `url('/blue_bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="py-20">
        <h3 className="font-medium text-lg md:text-2xl mt-3 text-white text-center">
          Enter your address to find deals in your area:
        </h3>
        <form onSubmit={handleGetValue}>
          <div className="w-full flex gap-3 justify-center items-center py-3 flex-wrap md:flex-nowrap">
            <input
              name="district"
              className="p-2 border border-gray w-full"
              type="text"
              placeholder="Your District*"
              required
            />
            <input
              name="location"
              className="p-2 border border-gray w-full"
              type="text"
              placeholder="Your Area/City*"
              required
            />
            <button
              type="submit"
              className="py-2 bg-[#4DDFFD] hover:bg-[#1F3BB1] hover:text-white w-full"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
      {/* if service is available  */}
      {formSubmitted && getServices?.data?.length !== 0 && (
        <div className="bg-white w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 p-5 md:p-10 rounded">
          {getServices?.data?.map((service: any, index: any) => (
            <WhatWeDoCard key={service?.id} service={service} bg="#fff" />
          ))}
        </div>
      )}
      {formSubmitted && getServices?.data?.length === 0 && (
        <div className="bg-white w-full h-full mb-8 p-5 md:p-10 rounded">
          {/* If service not available */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#112164] text-center">
            We're Sorry, No Service is Available - Yet!
          </h2>
          <p className="py-3 text-[#73729A] text-center">
            NetFx service is not available yet at your address. But we’re always
            expanding our services every day! <br /> Spread the word about NetFx
            to your neighbors, friends, and work colleagues, and we'll do our
            best to serve your address as soon as we can.
          </p>
          <p className="py-3 text-[#73729A] text-center">
            If you think you reached this page in error, you can re-check
            availability or check availability for a <br /> different address.
            You can also give us a call at{" "}
            <span className="font-bold text-lg pl-2 text-[#112164]">
              077-777-7777
            </span>
          </p>
          <p className="py-3 text-[#73729A] text-center">
            Add your name to our waitlist, and we’ll let you know when we get to
            your area.
          </p>
          {/* form */}
          <div className="w-full">
            <form
              className="flex flex-col items-center mt-5"
              onSubmit={handleSubmit}
            >
              <input
                name="name"
                className="p-2 border-2 border-gray w-full md:w-3/5 my-2"
                type="text"
                placeholder="Your Name*"
                required
                value={formValues.name}
                onChange={handleChange}
              />
              <input
                name="district"
                className="p-2 border-2 border-gray w-full md:w-3/5 my-2"
                type="text"
                placeholder="Your District*"
                required
                value={formValues.district}
                onChange={handleChange}
              />
              <input
                name="location"
                className="p-2 border-2 border-gray w-full md:w-3/5 my-2"
                type="text"
                placeholder="Your Area/Location*"
                required
                value={formValues.location}
                onChange={handleChange}
              />
              <input
                name="phone"
                className="p-2 border-2 border-gray w-full md:w-3/5 my-2"
                type="number"
                placeholder="Your Phone Number*"
                required
                value={formValues.phone}
                onChange={handleChange}
              />
              <input
                name="email"
                className="p-2 border-2 border-gray w-full md:w-3/5 my-2"
                type="email"
                placeholder="Your Email*"
                required
                value={formValues.email}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="px-8 py-1 bg-[#112164] hover:bg-[#4DDFFD] text-white w-full md:w-3/5 my-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <p className="py-3 text-[#73729A] text-center">
                We promise – we'll never share your information without your
                consent. Not now, not ever.
              </p>
              {showMessage && (
                <p className="text-[#73729A] p-2 w-full md:w-3/5 border-2 border-[#46b450]">
                  Thank you for your message. It has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FindArea;
