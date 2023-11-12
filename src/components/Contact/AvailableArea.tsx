import { ImLocation } from "react-icons/im";

interface coverageAreaProps {
  heading: string;
  title_1: string;
  title_2: string;
  title_3: string;
}

const AvailableArea = ({
  heading,
  title_1,
  title_2,
  title_3,
}: coverageAreaProps) => {
  return (
    <section className="w-full mb-10 md:mb-16">
      <div className="flex items-center flex-col">
        <span>
          <ImLocation className="text-4xl md:text-6xl font-bold text-gray-500" />
        </span>
        <span className="text-xl md:text-2xl lg:text-3xl font-bold py-3 text-[#112164] border-b-2 border-gray-200 w-full text-center">
          {heading}
        </span>
      </div>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <h3 className="text-xl font-bold text-[#112164]">{title_1}</h3>
          <p className="text-lg text-[#6c757d]">
            H#5/11, Senpara Parbata, Mirpur-10, <br /> Dhaka-1216 <br /> Mobile:
            01712121212, 011912121212 <br /> (SME)
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#112164]">{title_2}</h3>
          <p className="text-lg text-[#6c757d]">
            H#5/11, Senpara Parbata, Mirpur-10, <br /> Dhaka-1216 <br /> Mobile:
            01712121212, 01912121212 <br /> (SME)
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#112164]">{title_3}</h3>
          <p className="text-lg text-[#6c757d]">
            H#5/11, Senpara Parbata, Mirpur-10, <br /> Dhaka-1216 <br /> Mobile:
            01712121212, 01912121212 <br /> (SME)
          </p>
        </div>
      </div>
    </section>
  );
};

export default AvailableArea;
