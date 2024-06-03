import { client, urlFor } from "@/app/lib/sanity";
import { featureSource } from "@/helpers/featureSource";
import { statSource } from "@/helpers/statSource";
import { BlogArticle } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
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
      "authorName":author.name,
      "authorRole":author.role,
      "authorImageUrl": author.imageUrl.asset._ref,
  }`;

  const data = await client.fetch(query);
  return data;
}

const Blogs = async () => {
  const data = await getData();

  return (
    <section className="bg-[#161625] text-black font-jakarta  p-5 md:py-10 md:px-20">
      <article className="flex flex-col items-center xsm:flex-row py-5">
        <h2 className="text-[#A33DFF] text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Recent Blog Posts
        </h2>
      </article>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
        {data.map((post: BlogArticle) => (
          <Link
            href={`/blog/${post.currentSlug}`}
            key={post.id}
            className="flex flex-col items-start justify-start bg-[#a5a5a518] rounded-2xl overflow-hidden"
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
            <div className="w-full h-[1/2] p-5 flex flex-col justify-around">
              <div className=" flex items-center text-xs">
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.categoryTitle}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-semibold text-[#A33DFF]">
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
        ))}
      </div>
    </section>
  );
};

export default Blogs;
