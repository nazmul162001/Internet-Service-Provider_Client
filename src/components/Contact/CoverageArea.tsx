import AvailableArea from "./AvailableArea";

const CoverageArea = () => {
  return (
    <section className="w-full px-5 md:px-16 my-10">
      <div className="bg-white w-full p-5 rounded-lg border-2 border-gray-300">
        <AvailableArea
          heading="Dhaka Division"
          title_1="Mirpur"
          title_2="Dhanmondi"
          title_3="Gulshan"
        />
        <AvailableArea
          heading="Jashore Division"
          title_1="Jashore Sadar"
          title_2="Jashore City"
          title_3="Jashore New Market"
        />
      </div>
    </section>
  );
};

export default CoverageArea;
