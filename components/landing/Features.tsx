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
        We specialize in the intricacies of virtual asset laws and policies, empowering businesses and governments to confidently navigate the complex landscape of cryptocurrency regulations. Let us guide you through the uncharted territories of crypto compliance, ensuring your success and security in the digital economy.
        </h3>
      </article>
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {featureSource.map((element, index) => {
          return (
            <div
              key={index}
              className="bg-[#1616252f] w-auto  p-4 flex flex-col justify-around items-center rounded shadow-xl"
            >
              <Image
                src={element.icon}
                alt={element.title}
                className="w-[70%] h-auto"
              />
              <h3 className="text-[#A33DFF] font-bold text-3xl xsm:text-2xl my-[10px] text-center">
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
