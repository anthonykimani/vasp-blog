import { featureSource } from "@/helpers/featureSource";
import { statSource } from "@/helpers/statSource";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="bg-aqua text-black font-jakarta  p-5 md:py-10 md:px-20">
      <article className="flex flex-col items-center xsm:flex-row py-5">
        <h2 className="text-[#A33DFF] text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Focus Areas
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
              <h3 className="text-[#A33DFF] font-semibold text-xl xsm:text-2xl my-[10px] text-center">
                {element.title}
              </h3>
              <h4 className="text-[#596780] text-center">{element.subtitle}</h4>
            </div>
          );
        })}
      </article>
      
    </section>
  );
};

export default Features;
