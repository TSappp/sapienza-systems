import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function InsightPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <Link
            href="/insights"
            className="text-stone-400 text-sm hover:text-white transition-colors mb-6 inline-block"
          >
            &larr; All Insights
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-stone-400">
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
                      className="px-2 py-0.5 bg-stone-800 text-stone-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <article
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>

      {/* Back link */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/insights"
            className="text-amber-700 text-sm font-medium hover:text-amber-800 transition-colors"
          >
            &larr; Back to all insights
          </Link>
        </div>
      </section>
    </>
  );
}
