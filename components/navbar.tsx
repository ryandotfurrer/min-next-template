import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between pt-4 pb-8">
      <div>
        <Link href="/">
          <div className="bg-primary rounded-full border size-8 hover:bg-brand hover:border-brand transition-colors" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <Link href="/blog" className="lowercase">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#about" className="lowercase">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="lowercase">
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
