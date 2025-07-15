import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: {
    title: string;
    slug: string;
    excerpt?: string;
    published_at: string;
    category?: {
      name: string;
      slug: string;
    };
    tags?: {
      name: string;
      slug: string;
    }[];
    authors?: {
      slug: string;
      name: string;
      image_url?: string;
    }[];
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-3">
        <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
          {post.title}
        </Link>
      </h2>

      {post.excerpt && (
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      )}

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <time dateTime={post.published_at}>
          {new Date(post.published_at).toLocaleDateString()}
        </time>
        {post.category && (
          <Link
            href={`/blog?category=${post.category.slug}`}
            className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
          >
            {post.category.name}
          </Link>
        )}
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="flex gap-1 flex-wrap mb-4">
          {post.tags.map((tag) => (
            <Link
              key={tag.slug}
              href={`/blog?tag=${tag.slug}`}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      )}

      {post.authors && post.authors.length > 0 && (
        <div className="flex items-center gap-2">
          {post.authors.map((author) => (
            <Link
              key={author.slug}
              href={`/blog?author=${author.slug}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
            >
              {author.image_url && (
                <Image
                  src={author.image_url}
                  alt={author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              <span>{author.name}</span>
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}

interface BlogNavigationProps {
  currentPage: number;
  totalPages: number;
  searchParams: Record<string, string>;
  basePath?: string;
}

export function BlogNavigation({
  currentPage,
  totalPages,
  searchParams,
  basePath = "/blog",
}: BlogNavigationProps) {
  if (totalPages <= 1) return null;

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams({
      ...searchParams,
      page: page.toString(),
    });
    return `${basePath}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-2 mt-12">
      {currentPage > 1 && (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="px-4 py-2 border rounded hover:bg-gray-50"
        >
          Previous
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <Link
          key={pageNum}
          href={createPageUrl(pageNum)}
          className={`px-4 py-2 border rounded ${
            currentPage === pageNum
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-50"
          }`}
        >
          {pageNum}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="px-4 py-2 border rounded hover:bg-gray-50"
        >
          Next
        </Link>
      )}
    </div>
  );
}
