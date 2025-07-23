import { NextResponse } from 'next/server';
import { supabase } from "../supabaseClient";

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


export async function POST(data:UserCombined) {
    const {email,email_confirm,password,role,display_name,picture_url}=data
  // Tạo user mới
  const { data: user, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  // Gán role vào bảng profiles
  const { error: profileErr } = await supabase
    .from('profiles')
    .insert([{ id: user.user.id, role,display_name,picture_url }]);

  if (profileErr) {
    // rollback nếu lỗi
    await supabase.auth.admin.deleteUser(user.user.id);
    return NextResponse.json({ error: 'Tạo profile thất bại' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
