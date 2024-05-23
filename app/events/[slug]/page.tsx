import { client, urlFor } from "@/app/lib/sanity";
import { Event } from "@/types/interface";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == 'event' && slug.current=='${slug}']{
    title,
  description,
  "currentSlug": slug.current,
  "imageUrl": imageUrl.asset._ref,
  content,
  "dateTime": _createdAt,
  "updatedAt": _updatedAt,
  category,
  "headings": content[style in ["h1", "h2", "h3", "h4", "h5", "h6"]],
  link,
  "categoryTitle":category.title,
  location,
  content,
}[0]`;

  const data = await client.fetch(query);
  return data;
}

const BlogStructure = async ({ params }: { params: { slug: string } }) => {
  const event: Event = await getData(params.slug);

  return (
    event.content && (
      <section className="bg-[#161625] font-jakarta p-5 md:py-10 sm:px-[100px] md:px-[200px]">
        <article className="flex flex-col items-center xsm:flex-row py-5">
          <h2 className="text-red-600 text-center font-bold text-3xl md:text-4xl lg:text-5xl">
            {event.title}
          </h2>
          <Image
            src={urlFor(event.imageUrl).url()}
            width={1000}
            height={500}
            alt=""
            className="h-[500px] w-full object-cover my-[20px] rounded-md"
          />
        </article>
        <Toc headings={event?.headings} />
        <div className="prose prose-xl min-w-full text-white prose-invert  prose-li:marker:text-primary prose-a:text-primary">
          <PortableText value={event.content} />
        </div>
      </section>
    )
  );
};

export default BlogStructure;

const Toc = ({ headings }: any) => {
  return (
    <div>
      <h2 className="text-white">Table of Contents</h2>
      <nav>
        <ul className="text-white">
          {headings?.map((heading: any) => {
            return (
              <li key={heading?._key} className="mb-2">
                <a href="#">{heading?._key}hello</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
