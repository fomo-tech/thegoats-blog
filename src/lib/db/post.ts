
import { supabase } from '../supabaseClient'

export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: any
  cover_image?: string | null
  author_id?: string | null
  status: 'draft' | 'published' | 'archived'
  published_at?: string | null
  created_at: string
  updated_at: string
  category_id: string
  tags: string[] // danh sách tag ID

  // ➕ Các trường mới
  is_featured?: boolean
  is_trending?: boolean
  views?: number
  likes?: number
  seo_title?: string | null
  seo_description?: string | null
}

export async function getPostLists() {
  // Trending: Lấy 10 bài is_trending = true và is_published = true
  const { data: trendingPosts, error: trendingError } = await supabase
    .from('posts')
    .select(`
      id, title, slug, cover_image, views,
      author:author_id ( display_name ),
      category:category_id ( name ),
      published_at
    `)
    .eq('is_trending', true)
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(10)

  if (trendingError) throw trendingError

  // Latest: 10 bài mới nhất
  const { data: latestPosts, error: latestError } = await supabase
    .from('posts')
    .select(`
      id, title, slug, cover_image, views,
      author:author_id ( display_name ),
      category:category_id ( name ),
      published_at
    `)
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(10)

  if (latestError) throw latestError

  // Popular: 10 bài có nhiều views nhất
  const { data: popularPosts, error: popularError } = await supabase
    .from('posts')
    .select(`
      id, title, slug, cover_image, views,seo_description,
      author:author_id ( display_name ),
      category:category_id ( name ),
      published_at
    `)
    .eq('is_published', true)
    .order('views', { ascending: false })
    .limit(10)

  if (popularError) throw popularError

  return { trendingPosts, latestPosts, popularPosts }
}




export async function getHeroPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      id, title, slug, is_featured,is_published, is_trending,cover_image,
      author:author_id ( display_name ),
      category:category_id ( name ),
      published_at
    `)
    .order('published_at', { ascending: false })

  if (error) throw error

  const featuredPost = data.find(p => p.is_published)
  const popularPosts = data.slice(0, 4)
  const recentPosts = [...data].reverse().slice(0, 4)

  return { featuredPost, popularPosts, recentPosts } as any
}

// lib/db/posts.ts
export async function getPostsPaginatedWithFilters({
  page = 1,
  pageSize = 10,
  search = '',
  categoryId,
  tagId,
}: {
  page?: number
  pageSize?: number
  search?: string
  categoryId?: string
  tagId?: string
}): Promise<{ posts: any[], total: number }> {
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1

  // Step 1: Chuẩn bị query cơ bản
  let query = supabase
    .from('posts')
    .select(`
      *,
    author:profile!posts_author_id_fkey (
      id,
      email,
      display_name,
      picture_url
    ),
      categories(name),
      post_tags(
        tag:tags(id, name)
      )
    `, { count: 'exact' })
    .range(from, to)
    .order('created_at', { ascending: false })

  // Step 2: Thêm filter title nếu có
  if (search.trim()) {
    query = query.ilike('title', `%${search.trim()}%`)
  }

  // Step 3: Lọc theo danh mục nếu có
  if (categoryId) {
    query = query.eq('category_id', categoryId)
  }

  // Step 4: Nếu có tagId, truy vấn trước danh sách post_id tương ứng
  if (tagId) {
    const { data: tagLinks, error: tagError } = await supabase
      .from('post_tags')
      .select('post_id')
      .eq('tag_id', tagId)

    if (tagError) throw new Error('Lỗi khi lấy tag: ' + tagError.message)

    const postIds = tagLinks?.map(item => item.post_id) || []

    // Nếu không có bài viết nào chứa tag đó, trả về luôn
    if (postIds.length === 0) return { posts: [], total: 0 }

    query = query.in('id', postIds)
  }

  // Step 5: Lấy dữ liệu
  const { data, error, count } = await query
  if (error) throw new Error('Lỗi khi lấy bài viết: ' + error.message)

  // Step 6: Chuẩn hóa dữ liệu tags và category
  const posts = (data || []).map((post: any) => ({
    ...post,
    tags: post.post_tags?.map(pt => pt.tags) || [],
    category: post.categories || null,
  }))

  return {
    posts,
    total: count || 0,
  }
}

export async function getPostsBySlugCategoryPaginate(
  { page =1,
  pageSize =10,
  slug}:
 { page?: number,
  pageSize?: number,
  slug: string}
): Promise<{ posts: Post[]; total: number }> {
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1

  const { data: posts, count, error } = await supabase
    .from('posts')
    .select(
      `
      *,
      category:categories!inner(*)
      `,
      { count: 'exact' }
    )
    .eq('categories.slug', slug) // filter theo slug của category
    .range(from, to)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error('Lỗi khi lấy danh sách bài viết: ' + error.message)
  }

  return { posts: posts || [], total: count || 0 }
}



export async function getPostsPaginated(page = 1, pageSize = 10): Promise<{ posts: Post[], total: number }> {
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1

  const [{ data: posts, error }, { count, error: countError }] = await Promise.all([
    supabase
      .from('posts')
      .select('*', { count: 'exact' })
      .range(from, to)
      .order('created_at', { ascending: false }),

    supabase
      .from('posts')
      .select('*', { count: 'exact', head: true }),
  ])

  if (error || countError) {
    throw new Error('Lỗi khi lấy danh sách bài viết: ' + (error?.message || countError?.message))
  }

  return { posts: posts || [], total: count || 0 }
}


export async function getPostBySlug(slug: string): Promise<any | null> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      category:categories (*),
      post_tags(
        tag:tags(id, name)
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    throw new Error('Lỗi khi lấy bài viết theo slug: ' + error.message);
  }
 if (!data) return null;
 const { error: updateError } = await supabase
    .from('posts')
    .update({ views: (data.views ?? 0) + 1 })
    .eq('id', data.id);

  if (updateError) {
    console.error('Lỗi khi tăng view:', updateError.message);
  }

  return {
    ...data,
    views: (data.views ?? 0) + 1, // trả về giá trị đã tăng
  };
}



// Tạo slug từ title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // bỏ dấu tiếng Việt
    .replace(/[^a-z0-9]+/g, '-')     // thay space/ký tự lạ bằng -
    .replace(/(^-|-$)+/g, '')        // xóa - đầu/cuối
}

// ✅ Lấy tất cả bài viết
export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw new Error('Lỗi khi lấy danh sách bài viết: ' + error.message)
  return data || []
}

// ✅ Lấy bài viết theo ID
export async function getPostById(id: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select(`*,
      categories(name),
      post_tags(
        tag:tags(id, name)
      )
      `)
    .eq('id', id)
    .single()

  if (error) throw new Error('Lỗi khi lấy bài viết: ' + error.message)
   const tags = data.post_tags?.map((pt: { tag: { id: string } }) => pt.tag.id) || []

  return {
    ...data,
    tags, // gán tags: string[]
  }
}

// ✅ Tạo bài viết mới

export async function createPost(post: {
  title: string
  excerpt?: string | null
  content: any
  coverImage?: string | null
  categoryId: string
  isPublished: 'draft' | 'published'
  tags: string[]
  authorId: string
  isFeatured?: boolean
  isTrending?: boolean
  seoTitle?: string | null
  seoDescription?: string | null
}): Promise<Post> {
  const now = new Date().toISOString()
  const slug = generateSlug(post.title)

  const { data, error } = await supabase
    .from('posts')
    .insert({
      title: post.title,
      excerpt: post.excerpt ?? null,
      content: post.content,
      cover_image: post.coverImage ?? null,
      category_id: post.categoryId,
      status: post.isPublished,
      is_featured: post.isFeatured ?? false,
      is_trending: post.isTrending ?? false,
      seo_title: post.seoTitle ?? null,
      seo_description: post.seoDescription ?? null,
      slug,
      author_id: post.authorId,
      published_at: post.isPublished === 'published' ? now : null,
      updated_at: now,
    })
    .select()
    .single()

  if (error) throw new Error('Lỗi khi tạo bài viết: ' + error.message)

  const insertedPost = data as Post

  // Gắn tag vào bảng trung gian
  if (post.tags.length > 0) {
    const tagRows = post.tags.map((tagId) => ({
      post_id: insertedPost.id,
      tag_id: tagId,
    }))

    const { error: tagError } = await supabase
      .from('post_tags')
      .insert(tagRows)

    if (tagError) throw new Error('Lỗi khi gắn tag: ' + tagError.message)
  }

  return insertedPost
}

// ✅ Cập nhật bài viết
export async function updatePost(
  id: string,
  updates: {
    title: string
    excerpt?: string | null
    content: any
    coverImage?: string | null
    categoryId: string
    isPublished: 'draft' | 'published'
    tags: string[]
    is_featured?: boolean
    is_trending?: boolean
    seo_title?: string | null
    seo_description?: string | null
  }
): Promise<Post> {
  const now = new Date().toISOString()

  // Tạo slug mới nếu có title
  const slug = generateSlug(updates.title)

  // Cập nhật bài viết chính
  const { data, error } = await supabase
    .from('posts')
    .update({
      title: updates.title,
      excerpt: updates.excerpt ?? null,
      content: updates.content,
      cover_image: updates.coverImage ?? null,
      category_id: updates.categoryId,
      status: updates.isPublished,
      is_featured: updates.is_featured ?? false,
      is_published:updates.isPublished === 'published',
      is_trending: updates.is_trending ?? false,
      seo_title: updates.seo_title ?? null,
      seo_description: updates.seo_description ?? null,
      slug,
      updated_at: now,
      published_at: updates.isPublished === 'published' ? now : null,
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw new Error('Lỗi khi cập nhật bài viết: ' + error.message)

  const updatedPost = data as Post

  // Xoá các tag cũ
  const { error: deleteError } = await supabase
    .from('post_tags')
    .delete()
    .eq('post_id', id)

  if (deleteError) throw new Error('Lỗi khi xoá tag cũ: ' + deleteError.message)

  // Gắn tag mới
  if (updates.tags.length > 0) {
    const tagRows = updates.tags.map((tagId) => ({
      post_id: id,
      tag_id: tagId,
    }))

    const { error: tagError } = await supabase
      .from('post_tags')
      .insert(tagRows)

    if (tagError) throw new Error('Lỗi khi gắn tag mới: ' + tagError.message)
  }

  return updatedPost
}



// ✅ Xoá bài viết
export async function deletePost(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id)

  if (error) throw new Error('Lỗi khi xoá bài viết: ' + error.message)
  return true
}
