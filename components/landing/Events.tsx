import { client, urlFor } from "@/app/lib/sanity";
import { EventInterface } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";
export const revalidate = 30;

async function getData() {
  const query = `*[_type == 'event'] | order(_createdAt desc){
    title,
      description,
      "currentSlug": slug.current,
      "imageUrl": imageUrl.asset._ref,
      content,
      "dateTime": _createdAt,
      "updatedAt": _updatedAt,
      date,
      category,
      link,
      "categoryTitle":category.title,
      location,
      content,
  }`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

const Events = async () => {
  const data = await getData();

  return (
    <section className="bg-[#161625] text-black font-jakarta  p-5 md:py-10 md:px-20">
      <article className="flex flex-col items-center xsm:flex-row py-5">
        <h2 className="text-[#A33DFF] text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Upcoming Activities
        </h2>
        <h3 className="text-lg text-white text-center my-[30px]">
          Join Us in a Series of trainings, workshops & short courses among
          other exciting activities to advance adoption of Virtual Assets.
        </h3>
      </article>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data.map((post: EventInterface) => {
          return (
            <Link
              href={`${post.link}`}
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  width={0}
                  height={0}
                  src={urlFor(post.imageUrl).url()}
                  alt=""
                  className="aspect-[2/2] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/2] lg:aspect-[2/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex justify-between items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {format(new Date(post.date), "PPpp")}
                  </time>
                  <span
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.categoryTitle}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100">
                    <span>
                      <span className="absolute inset-0" />
                      {post.title}
                    </span>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
        {/* <button>view more</button> */}
      </div>
    </section>
  );
};

export default Events;
