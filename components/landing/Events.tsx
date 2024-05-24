import { client, urlFor } from "@/app/lib/sanity";
import { featureSource } from "@/helpers/featureSource";
import { statSource } from "@/helpers/statSource";
import { EventInterface } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { parse } from "date-fns";
import { Clock, MapPin } from "@phosphor-icons/react";

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
      link,
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
    <section className="bg-[#161625] text-black font-jakarta  p-5 md:py-10 md:px-20">
      <article className="flex flex-col items-center xsm:flex-row py-5">
        <h2 className="text-[#A33DFF] text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Upcoming Activities
        </h2>
        <h3 className="text-lg text-white text-center my-[30px]">
          Join Us in a Series of trainings, workshops & short courses among other exciting
          activities to advance adoption of Virtual Assets.
        </h3>
      </article>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data.map((post: EventInterface) => {
          const parsedDate = parse(post.dateTime, "yyyy-MM-dd", new Date());
          return (
            <Link
              href={`/event/${post.currentSlug}`}
              key={post.id}
              className="flex flex-col items-start justify-between bg-[#a5a5a518] rounded-2xl overflow-hidden w-full"
            >
              <article
                key={post.id}
                className="w-full h-full relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                  width={0}
                  height={0}
                  src={urlFor(post.imageUrl).url()}
                  alt=""
                  className="absolute inset-0 -z-10 min-h-full min-w-full object-cover"
                />
                <div className="hover:hidden absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="hover:hidden absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={parsedDate.toString()} className="mr-8">
                    {"March 4, 2024"}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <Image
                        width={100}
                        height={100}
                        src={urlFor(post.imageUrl).url()}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.location}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <span>
                    <span className="absolute inset-0" />
                    {post.title}
                  </span>
                </h3>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Events;
