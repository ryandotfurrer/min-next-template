This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and integrated with [Zenblog](https://zenblog.com) for content management.

## Features

- 🚀 Next.js 15 with App Router
- 📝 Zenblog CMS integration for blog content
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- 🔍 Blog post filtering by category, tags, and authors
- 📄 Dynamic blog post pages
- ⚡ Server-side rendering for SEO

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure Zenblog

1. Copy the environment variables file:

```bash
cp .env.example .env.local
```

2. Get your Blog ID from your [Zenblog dashboard](https://app.zenblog.com) and update the `.env.local` file:

```env
NEXT_PUBLIC_ZENBLOG_BLOG_ID=your-actual-blog-id
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Blog Features

- **Blog List**: Visit `/blog` to see all your blog posts with filtering options
- **Individual Posts**: Click on any post to view the full content at `/blog/[slug]`
- **Filtering**: Filter posts by category, tags, or authors using URL parameters
- **Pagination**: Navigate through multiple pages of blog posts
- **SEO-Friendly**: Server-side rendering for better search engine optimization

## Zenblog Integration

This project uses the Zenblog headless CMS with the following features:

- ✅ Typed HTTP client for API calls
- ✅ Post listing with pagination
- ✅ Individual post retrieval
- ✅ Category and tag filtering
- ✅ Author information display
- ✅ HTML content rendering

### API Endpoints Used

- `GET /blogs/:blogId/posts` - List all posts with optional filtering
- `GET /blogs/:blogId/posts/:slug` - Get individual post by slug
- Support for categories, tags, and authors filtering

## Customization

### Styling

The blog uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in:

- `/app/blog/page.tsx` - Blog listing page
- `/app/blog/[slug]/page.tsx` - Individual blog post page
- `/components/blog.tsx` - Reusable blog components

### Content Rendering

Blog content from Zenblog is rendered as HTML using `dangerouslySetInnerHTML`. The content includes:

- Rich text formatting
- Images and media (hosted by Zenblog)
- Embedded content
- Custom styling from your Zenblog configuration

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Zenblog Documentation](https://docs.zenblog.com) - learn about Zenblog CMS features
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about styling

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Don't forget to add your `NEXT_PUBLIC_ZENBLOG_BLOG_ID` environment variable in your deployment settings.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
