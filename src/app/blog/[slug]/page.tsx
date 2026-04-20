import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const POST_QUERY = defineQuery(`*[
  _type == "article"
  && slug.current == $slug
  && status == "published"
][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "mainImage": coverImage,
  body,
  "author": auteur->{ name, "image": image },
  "category": categories[0]->title
}`);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });
  return {
    title: post?.title ? `${post.title} — Maysanté` : "Article — Maysanté",
    description: post?.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) notFound();

  const { title, publishedAt, mainImage, body, author, category, excerpt } = post;

  const imageUrl = mainImage
    ? urlFor(mainImage).width(1200).height(630).quality(85).auto("format").url()
    : "https://placehold.co/1200x630/png";

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Tous les articles
          </Link>

          <div className="mb-8">
            {category && (
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5 mb-4">
                {category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              {title}
            </h1>
            {excerpt && (
              <p className="text-lg text-muted-foreground leading-relaxed">{excerpt}</p>
            )}

            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
              {author?.image && (
                <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={urlFor(author.image).width(72).height(72).quality(80).url()}
                    alt={author.name ?? "Auteur"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="text-sm">
                {author?.name && (
                  <p className="font-medium text-foreground">{author.name}</p>
                )}
                {publishedAt && (
                  <p className="text-muted-foreground">
                    {new Date(publishedAt).toLocaleDateString("fr-BE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10">
            <Image
              src={imageUrl}
              alt={title ?? "Article"}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {body && body.length > 0 && (
            <div className="prose prose-lg prose-gray max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-li:text-muted-foreground
              prose-blockquote:border-primary prose-blockquote:text-muted-foreground
              prose-img:rounded-xl">
              <PortableText value={body} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
