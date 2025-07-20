import RecentPosts from "@/components/recent-posts";
import { metadata } from "@/app/layout";

export default function Home() {
  return (
    <>
      <hgroup>
        <h1>{metadata.title?.toString() || "nextzen"}</h1>
        <p>{metadata.description}</p>
      </hgroup>
      <main className="space-y-8 my-12">
        <section>
          <h2>Recent Posts</h2>
          <RecentPosts />
        </section>
        <section>
          <h2 id="about">About</h2>
          <p>
            This is a minimal blog template using Next.js and Zenblog CMS. It
            features a clean design, responsive layout, and easy navigation.
          </p>
          <p>
            You can customize this template to fit your needs by editing the
            components and styles. The blog posts are fetched from Zenblog CMS,
            allowing you to manage your content easily.
          </p>
          <p>
            To get started, check out the{" "}
            <a
              href="https://zenblog.dev/docs"
              className="border-b border-muted-foreground hover:border-foreground"
            >
              Zenblog documentation
            </a>
            .
          </p>
        </section>
        <section>
          <h2 id="contact">Contact</h2>
          <p>If you have any questions or feedback, feel free to reach out!</p>
          <p>
            You can contact me via email at{" "}
            <a
              href="mailto:ryan@example.com"
              className="border-b border-muted-foreground hover:border-foreground"
            >
              ryan@example.com
            </a>
          </p>
          <p>
            Follow me on{" "}
            <a
              href="https://twitter.com/ryanfurrer"
              className="border-b border-muted-foreground hover:border-foreground"
            >
              Twitter
            </a>{" "}
            for updates and more content.
          </p>
        </section>
      </main>
    </>
  );
}
