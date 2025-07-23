import { supabase } from "../supabaseClient";

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