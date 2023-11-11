const Vision = () => {
  return (
    <section className="px-5 md:px-16 w-full h-full my-8">
      <div className="w-full bg-white py-5 rounded-lg">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#112164]">
          Our Guiding Principles
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-28 h-[2px] bg-gray-300 my-2"></div>
        </div>
        {/* principles card  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-5 text-center">
          {/* card one  */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-6xl text-[#6c757d]">
              01
            </h2>
            {/* dashed line  */}
            <div className="w-full flex items-center">
              <div className="w-full h-[1px] border-b-2 my-4 border-dashed border-gray-300 flex justify-center"></div>
              <div className="w-10 h-6 rounded-full border-4 border-gray-300"></div>
              <div className="w-full h-[1px] border-b-2 my-4 border-dashed border-gray-300 flex justify-center"></div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold py-3 text-[#112164]">
                Professional Approach
              </h3>
              <p className="text-[#6c757d] md:text-lg">
                Keep It Simple! There's no reason why individuals who wish to be
                involved in the Internet, need to have sophisticated technical
                knowledge and the ability to write and understand HTML protocol.
              </p>
            </div>
          </div>
          {/* card two  */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-6xl text-[#6c757d]">
              02
            </h2>
            {/* dashed line  */}
            <div className="w-full flex items-center">
              <div className="w-full h-[1px] border-b-2 my-4 border-dashed border-gray-300 flex justify-center"></div>
              <div className="w-10 h-6 rounded-full border-4 border-gray-300"></div>
              <div className="w-full h-[1px] border-b-2 my-4 border-dashed border-gray-300 flex justify-center"></div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold py-3 text-[#112164]">
                Technology Review
              </h3>
              <p className="text-[#6c757d] md:text-lg">
                Provide the best technology available! Those who know technology
                or need the most from it will be suitably impressed with our
                high-tech equipment. If it's current, we have it; if it's new,
                we'll be one of the first to get it!
              </p>
            </div>
          </div>
          {/* card three  */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-6xl text-[#6c757d]">
              03
            </h2>
            {/* dashed line  */}
            <div className="w-full flex items-center">
              <div className="w-full h-[1px] border-b-2 my-4 border-dashed border-gray-300 flex justify-center"></div>
              <div className="w-10 h-6 rounded-full border-4 border-gray-300"></div>
              <div className="w-full h-[1px] border-b-2 my-4 border-dashed border-gray-300 flex justify-center"></div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold py-3 text-[#112164]">
                Affordable Services
              </h3>
              <p className="text-[#6c757d] md:text-lg">
                Make it affordable! Amber IT programs are almost always one
                third to one half the cost of comparable services. This supports
                our mission of creating greater access to a greater number of
                people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
