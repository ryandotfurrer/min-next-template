import { zenblog } from "@/lib/zenblog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { data: post } = await zenblog.posts.get({
      slug: params.slug,
    });

    if (!post) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 underline mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
        </div>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <time dateTime={post.published_at}>
                {new Date(post.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              {post.category && (
                <Link
                  href={`/blog?category=${post.category.slug}`}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                >
                  {post.category.name}
                </Link>
              )}
            </div>

            {post.authors && post.authors.length > 0 && (
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-600">By:</span>
                {post.authors.map((author) => (
                  <div key={author.slug} className="flex items-center gap-2">
                    {author.image_url && (
                      <Image
                        src={author.image_url}
                        alt={author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <Link
                        href={`/blog?author=${author.slug}`}
                        className="font-medium text-gray-900 hover:text-blue-600"
                      >
                        {author.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap mb-8">
                {post.tags.map((tag) => (
                  <Link
                    key={tag.slug}
                    href={`/blog?tag=${tag.slug}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {/* Render the HTML content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html_content }}
          />
        </article>

        {/* Back to blog link at bottom */}
        <div className="mt-12 pt-8 border-t">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
}
