import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-app-bg bg-no-repeat bg-cover flex flex-col md:flex-row items-center justify-center p-5 md:py-10 md:px-20">
      <article className="text-black flex flex-col justify-around md:justify-center h-[500px]">
        <h1 className="text-red-600 text-5xl lg:text-6xl font-bold md:my-[20px]">
          Young Lawyers in Tech
        </h1>
        <h2 className="md:my-[20px] text-white">
          A community of Law Students and Early Career Lawyers Passionate About
          Technology and Innovation
        </h2>
        <button className=" py-3 px-6 w-[150px] rounded-full bg-red-600 text-white font-semibold hover:bg-white hover:text-black hover:border-aqua hover:cursor-pointer">
          Join Us
        </button>
      </article>
    </div>
  );
};

export default HeroSection;
