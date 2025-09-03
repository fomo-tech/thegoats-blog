import { NextResponse } from 'next/server';
import { supabase, supabaseAdmin } from "../supabaseClient";

export interface PROFILE {
  role: 'admin' | 'writer';
  picture_url?:string;
  display_name?:string;

}
export interface AUTH{
    email: string,
    password: string,
    email_confirm: boolean,
}

export type UserCombined = PROFILE & AUTH;

export type UserWithID = UserCombined & { id: string };

export async function getAllUsers() {
  // 1. Lấy profile từ database
  const { data: profiles, error: profileError } = await supabase
    .from('profile')
    .select('*');

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 500 });
  }

  // 2. Lấy toàn bộ auth users (email nằm ở đây)
  const { data: authData, error: authError } = await supabaseAdmin.auth.admin.listUsers();


  
  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 500 });
  }

  const authUsers = authData.users;

  // 3. Ghép profile với email theo ID
  const merged = profiles.map((profile) => {
    const matchedAuth = authUsers.find((u) => u.id === profile.id);
    return {
      ...profile,
      email: matchedAuth?.email || null,
    };
  });

  return merged;
}


export async function createUser(data: UserCombined): Promise<
  | { success: true }
  | { error: string; status: number }
> {
  const { email, email_confirm, password, role, display_name, picture_url } = data;

  const { data: user, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm,
  });

  if (error) throw new Error(error.message);

  const { error: profileErr } = await supabaseAdmin
    .from('profile')
    .insert([
      {
        id: user.user.id,
        role,
        display_name,
        picture_url,
        email: user.user.email,
      },
    ]);

  if (profileErr) {
    await supabaseAdmin.auth.admin.deleteUser(user.user.id);
     throw new Error(profileErr.message);
  }

  return { success: true };
}
export async function deleteUser(userId: string) {
  // 1. Kiểm tra user có tồn tại trong bảng profile không
  const { data: existing, error: findError } = await supabaseAdmin
    .from('profile')
    .select('id')
    .eq('id', userId)
    .single();

  if (findError || !existing) {
    throw new Error(`Không tìm thấy profile với id: ${userId}`);
  }

  // 2. Xoá khỏi bảng profile trước
  const { error: profileError } = await supabaseAdmin
    .from('profile')
    .delete()
    .eq('id', userId);

  if (profileError) {
    throw new Error(`Xoá profile thất bại: ${profileError.message}`);
  }

  // 3. Nếu xoá profile thành công ➜ tiếp tục xoá auth user
  const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId);
  if (authError) {
    throw new Error(`Xoá auth.user thất bại: ${authError.message}`);
  }

  return { success: true };
}


