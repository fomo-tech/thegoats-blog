export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: any;
  cover_image?: string | null;
  author_id?: string | null;
  status: "draft" | "published" | "archived";
  published_at?: string | null;
  created_at: string;
  updated_at: string;
  category_id: string;
  tags: string[]; // danh sách tag ID
  is_published: boolean;
  // ➕ Các trường mới
  is_featured?: boolean;
  is_trending?: boolean;
  views?: number;
  likes?: number;
  seo_title?: string | null;
  seo_description?: string | null;
  is_featured_hero: boolean;
};

export type PostFilters = {
  slugCategory?: string;
  slugTag?: string;
  keyword?: string;
};

export type PostQueryOptions = {
  limit?: number;
  page?: number;
  filters?: PostFilters;
};

export type PostListItem = {
  id: string;
  title: string;
  excerpt?: string;
  slug: string;
  cover_image: string | null;
  views: number;
  is_trending: boolean;
  is_featured: boolean;
  published_at: string;
  category: {
    id: string;
    name: string;
    slug: string;
  } | null;
  tags: {
    tag: {
      id: string;
      name: string;
      slug: string;
    };
  }[];
};
