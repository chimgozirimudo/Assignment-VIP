import React from "react";
import { postFn } from "../lib/posttFn";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

export default function Posts() {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: postFn,
    queryKey: ["posts"],
  });
  console.log(data);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin size-80" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-destructive flex justify-center items-center h-screen">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {data.posts.map((post) => {
          const { id, title, body, tags, reactions, userId, views } = post;
          const { likes, dislikes } = reactions;

          return (
            <article
              key={id}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-[#f8f6f2] shadow-[0_8px_24px_rgba(38,33,28,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(38,33,28,0.12)]"
            >
              <div className="bg-[#2f3c3a] p-4 text-stone-50">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-200">
                  Post #{id}
                </p>
                <h2 className="mt-2 text-lg font-bold leading-snug sm:text-xl">
                  {title}
                </h2>
              </div>

              <div className="space-y-4 p-4 sm:p-5">
                <p className="text-sm leading-6 text-stone-700 sm:text-[15px]">
                  {body}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={`${id}-${tag}`}
                      className="rounded-full border border-stone-300 bg-stone-200 px-2.5 py-1 text-[11px] font-medium text-stone-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 rounded-xl bg-stone-200/70 p-3 text-xs sm:text-sm">
                  <div>
                    <p className="text-stone-500">Likes</p>
                    <p className="mt-1 font-semibold text-stone-800">{likes}</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Dislikes</p>
                    <p className="mt-1 font-semibold text-stone-800">
                      {dislikes}
                    </p>
                  </div>
                  <div>
                    <p className="text-stone-500">User ID</p>
                    <p className="mt-1 font-semibold text-stone-800">
                      {userId}
                    </p>
                  </div>
                  <div>
                    <p className="text-stone-500">Views</p>
                    <p className="mt-1 font-semibold text-stone-800">{views}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
