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
        <div className="space-y-12">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="block group"
            >
              <Card className="bg-unset border-none p-0 shadow-none gap-2">
                <CardHeader className="flex items-center gap-x-4 p-0">
                  <CardTitle className="group-hover:text-brand transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="w-full flex-1 h-px bg-border" />
                  <span className="text-sm text-muted-foreground">
                    {new Intl.DateTimeFormat("en-US", {
                      year: "2-digit",
                      month: "numeric",
                      day: "numeric",
                    }).format(new Date(post.published_at))}
                  </span>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="line-clamp-2">
                    <p className="!m-0">{post.excerpt}</p>
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return <p className="text-red-500">Failed to load recent posts.</p>;
  }
}
