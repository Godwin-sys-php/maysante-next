import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { listPublishedArticles } from "@/lib/articles";

const BlogSection = async () => {
  const posts = await listPublishedArticles(3);

  if (posts.length === 0) return null;

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
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-background border border-border rounded-2xl overflow-hidden flex flex-col transition-all hover:border-primary/40 hover:shadow-lg p-6"
            >
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-auto pt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.published_at).toLocaleDateString("fr-BE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                    Lire <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
