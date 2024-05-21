import { client } from "@/app/lib/sanity";
import { Event } from "@/types/interface";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

export  const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == 'event' && slug.current==${slug}]{
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
}[0]`;

  const data = await client.fetch(query);
  console.log(query);
  return data;
}

const BlogStructure = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  
  const event: Event = await getData(params.slug);
  console.log("event", event);
  console.log("I'm here");
  
  return (
    // event.content && (
    //   <PortableText value={event.content} />
    // )
    <></>
  );
};

export default BlogStructure;
