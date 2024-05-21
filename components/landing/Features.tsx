import { featureSource } from "@/helpers/featureSource";
import { statSource } from "@/helpers/statSource";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="bg-aqua text-black font-jakarta  p-5 md:py-10 md:px-20">
      <article className="flex flex-col items-center xsm:flex-row py-5">
        <h2 className="text-red-600 text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Join Our Student Clubs
        </h2>
        <h3 className="text-lg text-white text-center my-[30px]">
          Join a community of young LawTech enthusiasts and match your goals to
          our programs, explore your options and map out your path to a
          successful Lawtech career.
        </h3>
      </article>
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {featureSource.map((element, index) => {
          return (
            <div
              key={index}
              className="bg-[#1616258b] w-auto  p-4 flex flex-col justify-around rounded shadow-xl"
            >
              <Image
                src={element.icon}
                alt={element.title}
                className="w-full h-auto"
              />
              <h3 className="text-red-600 font-semibold text-xl xsm:text-2xl my-[10px] text-center">
                {element.title}
              </h3>
              <h4 className="text-[#596780] text-center">{element.subtitle}</h4>
            </div>
          );
        })}
      </article>
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-[100px] justify-center">
        {statSource.map((element, index) => {
          return (
            <div
              key={index}
              className="bg-red-500 text-white max-w-[400px] p-4 flex flex-col justify-around rounded shadow-xl"
            >
              <h3 className="font-semibold text-4xl my-[10px]  text-center">
                {element.title}
              </h3>
              <h4 className="text-center">{element.subtitle}</h4>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Features;
