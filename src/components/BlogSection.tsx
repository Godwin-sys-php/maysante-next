import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/image";
import type { SanityImageSource } from "@sanity/image-url";

type Post = {
  _id: string;
  title: string | null;
  slug: { current: string | null } | null;
  publishedAt: string | null;
  excerpt: string | null;
  mainImage: SanityImageSource | null;
  author: string | null;
  category: string | null;
};

const LATEST_POSTS_QUERY = defineQuery(`*[
  _type == "post"
  && defined(slug.current)
] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  "author": author->name,
  "category": categories[0]->title
}`);

const BlogSection = async () => {
  const { data: posts } = await sanityFetch({ query: LATEST_POSTS_QUERY });

  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl text-foreground mb-3">Nos derniers articles</h2>
            <p className="text-muted-foreground max-w-lg">
              Conseils santé, actualités et guides pratiques pour prendre soin de vous et de vos proches.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline shrink-0"
          >
            Voir tous les articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {(posts as Post[]).map((post) => {
            const imageUrl = post.mainImage
              ? urlFor(post.mainImage).width(600).height(340).quality(80).auto("format").url()
              : "https://placehold.co/600x340/png";

            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug?.current}`}
                className="group bg-background border border-border rounded-2xl overflow-hidden flex flex-col transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={post.title ?? "Article"}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1">
                  {post.category && (
                    <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5 w-fit">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="mt-auto pt-2 flex items-center justify-between">
                    {post.publishedAt && (
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString("fr-BE", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-medium ml-auto">
                      Lire <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
