import { supabase } from "../supabaseClient"

export async function createCategory(name: string, slug: string) {
  const { data, error } = await supabase
    .from('categories')
    .insert({ name, slug })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getAllCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}
export async function updateCategory(id: string, name: string, slug: string) {
  const { data, error } = await supabase
    .from('categories')
    .update({ name, slug, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}
export async function deleteCategory(id: string) {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id)

  if (error) throw error
}
