import { zenblog } from "@/lib/zenblog";
// eslint-disable-next-line
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const { data: post } = await zenblog.posts.get({
      slug: slug,
    });

    if (!post) {
      notFound();
    }

    return (
      <div className="mt-8 md:mt-12">
        <article className="prose prose-neutral dark:prose-invert prose-img:rounded-lg prose-pre:rounded-md prose-pre:border prose-a:text-muted-foreground prose-a:hover:text-foreground prose-a:transition-colors prose-p:text-muted-foreground prose-blockquote:bg-muted prose-blockquote:p-4 prose-blockquote:*:m-0 prose-blockquote:*:text-foreground prose-blockquote:rounded-md prose-blockquote:border prose-blockquote:text-center">
          <header>
            <hgroup className="leading-none">
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
            </hgroup>
          </header>

          {/* Render the HTML content */}
          <div dangerouslySetInnerHTML={{ __html: post.html_content }} />
        </article>

        {post.tags && post.tags.length > 0 && (
          <div className="text-sm rounded-full border bg-muted w-fit px-2 py-1 leading-none">
            {post.tags.map((tag) => (
              <Link key={tag.slug} href={`/blog?tag=${tag.slug}`}>
                #{tag.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
}
