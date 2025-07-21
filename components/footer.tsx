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
          >
            Ryan Furrer
          </a>
          . All rights reserved.
        </span>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <a
              href="https://github.com/ryandotfurrer/nextzen"
              target="_blank"
              rel="noopener noreferrer"
              className="lowercase"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ryanfurrer/"
              target="_blank"
              rel="noopener noreferrer"
              className="lowercase"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ryandotfurrer"
              target="_blank"
              rel="noopener noreferrer"
              className="lowercase"
            >
              X (Twitter)
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
