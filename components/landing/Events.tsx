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
          Upcoming Events
        </h2>
        <h3 className="text-lg text-white text-center my-[30px]">
          Attend trainings, workshops & take courses among other exciting
          activities to build a rewarding LawTech career.
        </h3>
      </article>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
        {data.map((post: EventInterface) => {
          const parsedDate = parse(post.dateTime, "yyyy-MM-dd", new Date());
          return (
            <Link
              href={`/event/${post.currentSlug}`}
              key={post.id}
              className="flex flex-col items-start justify-between bg-[#a5a5a518] rounded-2xl overflow-hidden w-[400px]"
            >
              <div className="relative w-full h-full overflow-hidden object-contain">
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
              <div className="w-full h-full p-5 flex flex-col justify-around">
                <div className="flex items-center justify-between text-xs">
                  <div className="text-white flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>

                    <time
                      dateTime={parsedDate.toString()}
                      className="text-gray-500 ml-2"
                    >
                      {"August 05, 2024"}
                    </time>
                  </div>
                  <div className="flex items-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>

                    <span className="text-gray-500 ml-2">{post.location}</span>
                  </div>
                </div>
                <div className="group relative h-full flex flex-col items-start justify-around">
                  <h3 className="text-2xl font-semibold text-[#A33DFF] mb-3">
                    <span>
                      <span className="absolute inset-0" />
                      {post.title}
                    </span>
                  </h3>
                  <span className=" rounded-full text-xs my-5 bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.categoryTitle}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Events;
