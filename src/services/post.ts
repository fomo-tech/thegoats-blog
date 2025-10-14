import { supabase } from "@/lib/supabaseClient";
import {
  Post,
  PostFilters,
  PostListItem,
  PostQueryOptions,
} from "@/types/post";

function applyFilters(query: any, filters?: PostFilters) {
  if (!filters) return query;

  if (filters.slugCategory) {
    query = query.eq("category.slug", filters.slugCategory);
  }

  if (filters.slugTag) {
    query = query.eq("tags.tag.slug", filters.slugTag);
  }

  if (filters.keyword) {
    query = query.ilike("title", `%${filters.keyword}%`);
  }

  return query;
}

// getPosts client
export async function getPopularPosts({
  limit = 10,
  page = 1,
  filters,
}: PostQueryOptions): Promise<{
  data: PostListItem[] | null;
  count: number | null;
}> {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("posts")
    .select(
      `
      id, title, slug, cover_image, views, is_trending, is_featured, excerpt,
      category:category_id ( id, name, slug ),
      tags:post_tags ( tag:tag_id ( id, name, slug ) ),
      published_at,
      content
    `,
      { count: "exact" }
    )
    .eq("is_published", true)
    .order("views", { ascending: false })
    .range(from, to);

  query = applyFilters(query, filters);

  const { data, error, count } = await query;
  if (error) throw error;

  // Chuẩn hóa data theo PostListItem
  const mappedData: PostListItem[] | null =
    data?.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      cover_image: item.cover_image,
      views: item.views,
      is_trending: item.is_trending,
      is_featured: item.is_featured,
      excerpt: item.excerpt,
      published_at: item.published_at,
      category: item.category ?? null,
      content: item.content,
      tags: item.tags?.map((t: any) => t.tag) ?? [],
    })) ?? null;

  return { data: mappedData, count };
}

export async function getTrendingPosts({
  limit = 10,
  page = 1,
  filters,
}: PostQueryOptions): Promise<{
  data: PostListItem[] | null;
  count: number | null;
}> {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("posts")
    .select(
      `
      id, title, slug, cover_image, views, is_trending, is_featured, excerpt,
      category:category_id ( id, name, slug ),
      tags:post_tags ( tag:tag_id ( id, name, slug ) ),
      published_at
    `,
      { count: "exact" }
    )
    .eq("is_published", true)
    .eq("is_trending", true)
    .order("published_at", { ascending: false })
    .range(from, to);

  query = applyFilters(query, filters);

  const { data, error, count } = await query;
  if (error) throw error;

  const mappedData: PostListItem[] | null =
    data?.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      cover_image: item.cover_image,
      views: item.views,
      is_trending: item.is_trending,
      is_featured: item.is_featured,
      excerpt: item.excerpt,
      published_at: item.published_at,
      category: item.category ?? null,
      tags: item.tags?.map((t: any) => t.tag) ?? [],
    })) ?? null;

  return { data: mappedData, count };
}

export async function getLatestPosts({
  limit = 10,
  page = 1,
  filters,
}: PostQueryOptions): Promise<{
  data: PostListItem[] | null;
  count: number | null;
}> {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("posts")
    .select(
      `
      id, title, slug, cover_image, views, is_trending, is_featured, excerpt,
      category:category_id ( id, name, slug ),
      tags:post_tags ( tag:tag_id ( id, name, slug ) ),
      published_at
    `,
      { count: "exact" }
    )
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .range(from, to);

  query = applyFilters(query, filters);

  const { data, error, count } = await query;
  if (error) throw error;

  const mappedData: PostListItem[] | null =
    data?.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      cover_image: item.cover_image,
      views: item.views,
      is_trending: item.is_trending,
      is_featured: item.is_featured,
      excerpt: item.excerpt,
      published_at: item.published_at,
      category: item.category ?? null,
      tags: item.tags?.map((t: any) => t.tag) ?? [],
    })) ?? null;

  return { data: mappedData, count };
}
