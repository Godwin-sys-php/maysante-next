import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { listPublishedArticles } from "@/lib/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Maysanté",
  description:
    "Conseils santé, actualités et guides pratiques pour prendre soin de vous et de vos proches à domicile.",
  alternates: { canonical: "https://maysante.be/blog" },
};

export default async function BlogPage() {
  const posts = await listPublishedArticles();

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

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col transition-all hover:border-primary/40 hover:shadow-lg p-6"
                >
                  <div className="flex flex-col gap-3 flex-1">
                    <h2 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
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
