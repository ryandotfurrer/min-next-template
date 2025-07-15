import { createZenblogClient } from 'zenblog';

// You'll need to replace this with your actual Blog ID from the Zenblog dashboard
const BLOG_ID = process.env.NEXT_PUBLIC_ZENBLOG_BLOG_ID || 'your-blog-id';

if (!process.env.NEXT_PUBLIC_ZENBLOG_BLOG_ID) {
  console.warn('NEXT_PUBLIC_ZENBLOG_BLOG_ID environment variable is not set. Please set it in your .env.local file.');
}

export const zenblog = createZenblogClient({
  blogId: BLOG_ID,
});

// Types for better TypeScript support
export interface Post {
  title: string;
  html_content: string;
  slug: string;
  category?: {
    name: string;
    slug: string;
  };
  tags?: {
    name: string;
    slug: string;
  }[];
  excerpt?: string;
  published_at: string;
  authors?: {
    slug: string;
    name: string;
    image_url?: string;
    website?: string;
    twitter?: string;
  }[];
}

export interface Category {
  name: string;
  slug: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface Author {
  name: string;
  slug: string;
  image_url?: string;
  twitter?: string;
  website?: string;
  bio?: string;
}

export interface PostsResponse {
  data: Post[];
  total?: number;
  offset?: number;
  limit?: number;
}

export interface CategoriesResponse {
  data: Category[];
  total?: number;
  offset?: number;
  limit?: number;
}

export interface TagsResponse {
  data: Tag[];
  total?: number;
  offset?: number;
  limit?: number;
}

export interface AuthorsResponse {
  data: Author[];
  total?: number;
  offset?: number;
  limit?: number;
}
