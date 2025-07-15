import { zenblog } from "@/lib/zenblog";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default async function RecentPosts() {
  try {
    const { data: posts } = await zenblog.posts.list({
      limit: 5,
    });

    return (
      <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.slug} className="group p-0 gap-0">
              <CardHeader className="p-0 overflow-auto rounded-t-xl">
                <Image
                  src={post.cover_image || ""}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover aspect-video"
                />
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between mb-2">
                  <CardTitle>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="border-b-2 border-foreground hover:text-brand transition-colors hover:border-brand"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <span className="text-sm text-muted-foreground num">
                    {new Intl.DateTimeFormat("en-US", {
                      year: "2-digit",
                      month: "numeric",
                      day: "numeric",
                    }).format(new Date(post.published_at))}
                  </span>
                </div>
                <CardDescription className="line-clamp-1">
                  <p>{post.excerpt}</p>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return <p className="text-red-500">Failed to load recent posts.</p>;
  }
}
