import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-app-bg bg-no-repeat bg-cover flex flex-col md:flex-row items-center justify-start p-5 md:py-10 ">
      <article className="text-black flex flex-col justify-center md:justify-center h-[500px]">
        <h2 className=" text-white text-3xl font-semibold">
          We are the
        </h2>
        <div className="my-[20px] md:my-[0px]">
          <h1 className="text-white font-clashDisplay text-5xl lg:text-6xl font-semibold md:my-[20px]">
            Virtual Assets
          </h1>
          <h1 className="text-white font-clashDisplay text-5xl lg:text-6xl font-semibold md:my-[20px]">
            Chamber of Commerce
          </h1>
        </div>
        <h2 className="md:mb-[30px] text-white">
          A Policy Think Tank to Advance Adoption of Virtual Assets
        </h2>
        <button className=" py-3 px-6 w-[150px] rounded-full bg-[#A33DFF] text-white font-semibold hover:bg-white hover:text-black hover:border-aqua hover:cursor-pointer">
          Join Us
        </button>
      </article>
    </div>
  );
};

export default HeroSection;
