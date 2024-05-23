import { client, urlFor } from "@/app/lib/sanity";
import { BlogArticle } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";

const featuredPost = {
  id: 1,
  title: "We’re incredibly proud to announce we have secured $75m in Series B",
  href: "#",
  description:
    "Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  author: {
    name: "Michael Foster",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

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

export default async function FeaturedBlogPost() {
  const posts = await getData();
  return (
    <div className=" py-24 sm:py-32">
      <article className="flex flex-col items-center xsm:flex-row py-5">
        <h2 className="text-[#A33DFF] text-center mb-[100px] font-bold text-3xl md:text-4xl lg:text-5xl">
          Recent Blog Posts
        </h2>
      </article>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
          <time
            dateTime={featuredPost.datetime}
            className="block text-sm leading-6 text-gray-400"
          >
            {featuredPost.date}
          </time>
          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {featuredPost.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {featuredPost.description}
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <a
                href={featuredPost.href}
                className="text-sm font-semibold leading-6 text-[#A33DFF]"
                aria-describedby="featured-post"
              >
                Continue reading <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
              <a
                href={featuredPost.author.href}
                className="flex gap-x-2.5 text-sm font-semibold leading-6 text-white"
              >
                <Image
                  src={featuredPost.author.imageUrl}
                  width={100}
                  height={100}
                  alt=""
                  className="h-6 w-6 flex-none rounded-full text-white bg-gray-50"
                />
                {featuredPost.author.name}
              </a>
            </div>
          </div>
        </article>
        <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-gray-900/10">
            {posts.map((post: BlogArticle) => (
              <Link
                href={`/blog/${post.currentSlug}`}
                key={post.id}
                className="py-12"
              >
                <div className="group relative max-w-xl">
                  <time
                    dateTime={post.dateTime}
                    className="block text-sm leading-6 text-gray-600"
                  >
                    {post.dateTime}
                  </time>
                  <h2 className="mt-2 text-xl font-bold text-[#A33DFF]">
                    <span>
                      <span className="absolute inset-0" />
                      {post.title}
                    </span>
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="mt-4 flex">
                  <span
                    className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-white"
                  >
                    <Image
                      src={urlFor(post.authorImageUrl).url()}
                      width={100}
                      height={100}
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-gray-50 object-cover"
                    />
                    {post.authorName}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
