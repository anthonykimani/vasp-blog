import { partnerSource } from "@/helpers/partnersSource";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="bg-aqua text-black font-jakarta  p-5 md:py-10 md:px-20">
      <article className="flex flex-col items-center xsm:flex-row py-5">
        <h2 className="text-[#A33DFF] text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Our Partners
        </h2>
        <div className="flex items-center w-full justify-around my-10 overflow-y-scroll hide-scroll-bar hide-scroll-bar::-webkit-scrollbar">
          {
            partnerSource.map((element)=>{
              return (
                <Image key={element.id} src={element.imageSource} alt="" width={0} height={0} className="min-w-[300px] h-[300px] rounded-full object-cover m-5" />
              )
            })
          }
        </div>
      </article>
    </section>
  );
};

export default Partners;
