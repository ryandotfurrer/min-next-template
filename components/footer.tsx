import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between pb-8 text-sm text-muted-foreground mt-12">
      <div>
        <span>
          © 2025{" "}
          <a
            href="https://ryanfurrer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline "
          >
            Ryan Furrer
          </a>
          . All rights reserved.
        </span>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <Link href="/blog" className="lowercase">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="lowercase">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="lowercase">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
