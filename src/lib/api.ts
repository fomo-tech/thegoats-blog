import { supabase } from './supabaseClient';

export type Post = {
  id: string;
  title: string;
  content: string;
  created_at: string;
};

// Lấy tất cả bài viết
export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data || [];
}

// Tạo bài viết
export async function createPost(post: Omit<Post, 'id' | 'created_at'>) {
  const { error } = await supabase.from('posts').insert(post);
  if (error) throw new Error(error.message);
}

// Cập nhật bài viết
export async function updatePost(id: string, post: Partial<Omit<Post, 'id'>>) {
  const { error } = await supabase.from('posts').update(post).eq('id', id);
  if (error) throw new Error(error.message);
}

// Xoá bài viết
export async function deletePost(id: string) {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// Lấy 1 bài viết
export async function getPostById(id: string): Promise<Post | null> {
  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
  if (error) throw new Error(error.message);
  return data;
}

export async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    return data;
  }
  
  export async function logout() {
    await supabase.auth.signOut();
  }
  
  export async function getUser() {
    const { data } = await supabase.auth.getUser();
    return data.user;
  }