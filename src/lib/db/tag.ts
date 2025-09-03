import { supabase } from "../supabaseClient"

export async function createTag(name: string, slug: string) {
  const { data, error } = await supabase
    .from('tags')
    .insert({ name, slug })
    .select()
    .single()

  if (error) throw error
  return data
}
export async function getAllTags() {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}
export async function updateTag(id: string, name: string, slug: string) {
  const { data, error } = await supabase
    .from('tags')
    .update({ name, slug, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}
export async function deleteTag(id: string) {
  const { error } = await supabase
    .from('tags')
    .delete()
    .eq('id', id)

  if (error) throw error
  return true
}
