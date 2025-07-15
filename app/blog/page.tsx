import RecentPosts from "@/components/recent-posts";
import { zenblog } from "@/lib/zenblog";
import Link from "next/link";

interface BlogPageProps {
  searchParams: Promise<{
    category?: string;
    tag?: string;
    author?: string;
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams.page || "1");
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const { data: posts, total } = await zenblog.posts.list({
      limit,
      offset,
      ...(resolvedSearchParams.category && {
        category: resolvedSearchParams.category,
      }),
      ...(resolvedSearchParams.tag && { tags: [resolvedSearchParams.tag] }),
      ...(resolvedSearchParams.author && {
        author: resolvedSearchParams.author,
      }),
    });

    const totalPages = total ? Math.ceil(total / limit) : 1;

    return (
      <div className="container mx-auto px-4 py-8">
        {/* <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ←   Back to Home
          </Link>
        </div> */}

        {/* Filter indicators */}
        {(resolvedSearchParams.category ||
          resolvedSearchParams.tag ||
          resolvedSearchParams.author) && (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold mb-2">Active Filters:</h3>
            <div className="flex gap-2 flex-wrap">
              {resolvedSearchParams.category && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Category: {resolvedSearchParams.category}
                </span>
              )}
              {resolvedSearchParams.tag && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Tag: {resolvedSearchParams.tag}
                </span>
              )}
              {resolvedSearchParams.author && (
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Author: {resolvedSearchParams.author}
                </span>
              )}
              <Link
                href="/blog"
                className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200"
              >
                Clear filters
              </Link>
            </div>
          </div>
        )}

        {/* Posts grid */}
        {posts.length > 0 ? (
          <RecentPosts />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found.</p>
            <p className="text-gray-400">Check back later for new content!</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {page > 1 && (
              <Link
                href={`/blog?${new URLSearchParams({
                  ...resolvedSearchParams,
                  page: (page - 1).toString(),
                }).toString()}`}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Previous
              </Link>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blog?${new URLSearchParams({
                    ...resolvedSearchParams,
                    page: pageNum.toString(),
                  }).toString()}`}
                  className={`px-4 py-2 border rounded ${
                    page === pageNum
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </Link>
              )
            )}

            {page < totalPages && (
              <Link
                href={`/blog?${new URLSearchParams({
                  ...resolvedSearchParams,
                  page: (page + 1).toString(),
                }).toString()}`}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="text-center py-12">
          <p className="text-red-500 text-lg">Error loading blog posts.</p>
          <p className="text-gray-500">
            Please check your Zenblog configuration and try again.
          </p>
        </div>
      </div>
    );
  }
}
