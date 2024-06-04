import { client, urlFor } from "@/app/lib/sanity";
import Navbar from "@/components/landing/Navbar";
import { EventInterface } from "@/types/interface";
import { slugify } from "@/utils/helpers";
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

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

const Event = async ({ params }: { params: { slug: string } }) => {
  const event: EventInterface = await getData(params.slug);

  console.log(event);

  return (
    event.currentSlug && (
      <>
        <Navbar />
        <section className="bg-[#161625] font-jakarta md:py-10 sm:px-[30px] xl:px-[100px]">
          <article className="flex flex-col items-center xsm:flex-row py-5">
            <h2 className="text-[#A33DFF] text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-5">
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
          <div className="flex flex-col-reverse md:flex-row prose prose-xl min-w-full text-white prose-invert prose-li:marker:text-primary prose-a:text-primary">
            <div className="mx-[10px] md:mx-[0px] rounded-3xl p-5 md:p-10 bg-slate-100 bg-opacity-5">
              <PortableText
                value={event.content}
                components={myPortableTextComponents}
              />
            </div>
            <Toc headings={event?.headings} />
          </div>
        </section>
      </>
    )
  );
};

export default Event;

const Toc = ({ headings }: any) => {
  return (
    <div className="min-w-[30%] md:ml-5">
      <h2 className="text-white">Table of Contents</h2>
      <nav>
        <ul className="text-white">
          {headings?.map((heading: any) => {
            return (
              <li key={`#${heading?._key}`} className="mb-2">
                <a
                  href={`#${slugify(heading?.children[0].text)}`}
                  className=" hover:text-[#A33DFF] ease-in-out"
                >
                  {heading?.children[0].text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlFor(value).url()} alt="Post" width={700} height={700} />
    ),
  },
  block: {
    h1: ({ value }: any) => (
      <h1
        id={slugify(value.children[0].text)}
        className="text-5xl font-bold mb-3"
      >
        {value.children[0].text}
      </h1>
    ),
    h2: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }: any) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
  },
};
