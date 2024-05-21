import { client, urlFor } from "@/app/lib/sanity";
import { featureSource } from "@/helpers/featureSource";
import { statSource } from "@/helpers/statSource";
import { Event } from "@/types/interface";
import Image from "next/image";
import React from "react";

async function getData() {
  const query = `*[_type == 'event'] | order(_createdAt desc){
    title,
      description,
      "currentSlug": slug.current,
      "imageUrl": imageUrl.asset._ref,
      content,
      "dateTime": _createdAt,
      "updatedAt": _updatedAt,
      category,
      "categoryTitle":category.title,
      location,
      content,
  }`;

  const data = await client.fetch(query);
  return data;
}

const Events = async () => {
  const data = await getData();

  return (
    <section className="bg-aqua text-black font-jakarta  p-5 md:py-10 md:px-20">
      <article className="flex flex-col items-center xsm:flex-row py-5">
        <h2 className="text-red-500 text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Upcoming Events
        </h2>
        <h3 className="text-lg text-white text-center my-[30px]">
          Attend trainings, workshops & take courses among other exciting
          activities to build a rewarding LawTech career.
        </h3>
      </article>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
        {data.map((post: Event) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between bg-[#a5a5a518] rounded-2xl overflow-hidden"
          >
            <div className="relative w-full h-[300px] overflow-hidden object-contain">
              {post.imageUrl && (
                <Image
                  src={urlFor(post.imageUrl).url()}
                  alt=""
                  width={0}
                  height={0}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="max-w-xl p-5">
              <div className="mt-8 flex items-center text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.categoryTitle}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-semibold text-red-600">
                  <a>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Events;
