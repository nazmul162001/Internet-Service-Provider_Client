import React, { useState, useEffect } from "react";
import Banner from "./Banner/Banner";
import Extra from "./ExtraSection/Extra";
import ExtraTwo from "./ExtraSection/ExtraTwo";
import Faq from "./Faq/Faq";
import FindArea from "./FindArea/FindArea";
import GetStart from "./GetStart/GetStart";
import Blogs from "./LatestBlogs/Blogs";
import OurPackage from "./OurPackage/OurPackage";
import ServiceByCategoryLatest from "./ServiceByCategory/ServiceCategoryLatest";
import TestiMonial from "./Testmonial/TestMonial";
import UpComing from "./UpCommingService/UpComing";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import { BsArrowUp } from "react-icons/bs";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let prevScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < prevScrollY) {
        // User is scrolling up
        if (currentScrollY > 0) {
          // Show the button when not at the top
          setShowButton(true);
        } else {
          // Hide the button when at the top
          setShowButton(false);
        }
      } else {
        // User is scrolling down
        setShowButton(false);
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full">
      <Banner />
      <Faq />
      <Extra />
      <ExtraTwo />
      <WhatWeDo />
      {/* <ServiceByCategory /> */}
      <ServiceByCategoryLatest />
      <UpComing />
      <WhyChooseUs />
      <FindArea />
      <OurPackage />
      <TestiMonial />
      <Blogs />
      <GetStart />

      {/* back to top button  */}
      <div
        className={`fixed bottom-3 right-3 transition-opacity duration-200 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <span
          onClick={scrollToTop}
          className="w-12 h-12 flex justify-center items-center bg-[#1F3BB1] hover:bg-[#4DDFFD] hover:text-black transition-all duration-200 cursor-pointer text-white rounded-full"
        >
          <BsArrowUp className="text-lg" />
        </span>
      </div>
    </section>
  );
};

export default Home;
