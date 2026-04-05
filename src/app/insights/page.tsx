import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights from Sapienza Systems on operations, systems, documentation, workflow, and execution—from hospitality to biotech.",
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            Thinking on Operations, Systems, and Execution
          </h1>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl leading-relaxed">
            Practical writing about what makes teams run well — and what gets in
            the way.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-stone-500 text-center">
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group block p-6 bg-white border border-stone-200 rounded-lg hover:border-stone-300 hover:shadow-sm transition-all"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mb-3">
                    <time>{post.date}</time>
                    <span>&middot;</span>
                    <span>{post.readingTime}</span>
                    {post.tags.length > 0 && (
                      <>
                        <span>&middot;</span>
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
