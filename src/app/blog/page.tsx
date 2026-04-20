import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Blog — Maysanté",
  description:
    "Conseils santé, actualités et guides pratiques pour prendre soin de vous et de vos proches à domicile.",
};

const POSTS_QUERY = defineQuery(`*[
  _type == "article"
  && defined(slug.current)
  && status == "published"
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "mainImage": coverImage,
  "author": auteur->name,
  "category": categories[0]->title
}`);

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">Blog Maysanté</h1>
            <p className="text-muted-foreground max-w-xl">
              Conseils santé, actualités et guides pratiques pour prendre soin de vous et de vos proches.
            </p>
          </div>

          {posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(posts as Post[]).map((post) => {
                const imageUrl = post.mainImage
                  ? urlFor(post.mainImage).width(600).height(340).quality(80).auto("format").url()
                  : "https://placehold.co/600x340/png";

                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug?.current}`}
                    className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col transition-all hover:border-primary/40 hover:shadow-lg"
                  >
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={post.title ?? "Article"}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-6 flex flex-col gap-3 flex-1">
                      {post.category && (
                        <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5 w-fit">
                          {post.category}
                        </span>
                      )}
                      <h2 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
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
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              <p>Aucun article publié pour le moment. Revenez bientôt !</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
