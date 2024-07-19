import { client, urlFor } from "@/app/lib/sanity";
import { ResourceInterface } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
export const revalidate = 30;

async function getData() {
  const query = `*[_type == 'research'] | order(_createdAt desc){
    title,
      description,
      "currentSlug": slug.current,
      "imageUrl": imageUrl.asset._ref,
      "dateTime": _createdAt,
      "updatedAt": _updatedAt,
      category,
      link,
      "categoryTitle":category.title,
      location,
      researchedEntity,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Resources() {
  const resources = await getData();
  return (
    <div className="bg-[#161625] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From the Knowledge Hub
          </h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Explore Virtual Assets Reports
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {resources.map((post: ResourceInterface) => (
            <Link
              href={post.link}
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between bg-slate-100 bg-opacity-5 hover:bg-opacity-10 p-4 rounded-xl"
            >
              <div className="flex justify-between w-full items-center gap-x-4 text-xs">
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-black hover:bg-gray-100">
                  {post.categoryTitle}
                </span>
                <time dateTime={post.dateTime} className="text-gray-500">
                  August 12, 2024
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
                  <span>
                    {post.title}
                  </span>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={urlFor(post.imageUrl).url()}
                  width={0}
                  height={0}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                    <span>
                      {post.researchedEntity}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
