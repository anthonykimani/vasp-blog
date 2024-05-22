import { client, urlFor } from '@/app/lib/sanity';
import { BlogArticle } from '@/types/interface';
import { PortableText } from 'next-sanity';
import Image from 'next/image'
import React from 'react'

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current=='${slug}']{
    title,
      description,
      "currentSlug": slug.current,
      "imageUrl": imageUrl.asset._ref,
      content,
      "dateTime": _createdAt,
      "updatedAt": _updatedAt,
      category,
      "categoryTitle":category.title,
      "authorName":author.name,
      "authorRole":author.role,
      "authorImageUrl": author.imageUrl.asset._ref,
}[0]`;

  const data = await client.fetch(query);
  return data;
}

const BlogStructure = async ({ params }: { params: { slug: string } }) => {
  const blog:BlogArticle  = await getData(params.slug);

  return (
    blog.content && (
      <section className="bg-[#161625] font-jakarta p-5 md:py-10 sm:px-[100px] md:px-[200px]">
        <article className="flex flex-col items-center xsm:flex-row py-5">
          <h2 className="text-red-600 text-center font-bold text-3xl md:text-4xl lg:text-5xl">
            {blog.title}
          </h2>
          <Image
            src={urlFor(blog.imageUrl).url()}
            width={1000}
            height={500}
            alt=""
            className="h-[500px] w-full object-cover my-[20px] rounded-md"
          />
        </article>
        <div className="prose prose-xl min-w-full text-white prose-invert  prose-li:marker:text-primary prose-a:text-primary">
          <PortableText value={blog.content} />
        </div>
      </section>
    )
  );
};

export default BlogStructure;