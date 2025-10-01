import { supabase } from "@/lib/supabaseClient";
import { ISetting, SettingMap } from "@/types/setting";

export async function createSetting({ key, value }: ISetting) {
  const { data, error } = await supabase
    .from("settings")
    .insert({ key, value })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function upsertSettings(settings: ISetting[]) {
  const { data, error } = await supabase
    .from("settings")
    .upsert(settings, { onConflict: "key" }) // key unique => update nếu tồn tại
    .select();

  if (error) throw error;
  return data;
}

export async function updateSetting({ key, value }: ISetting) {
  const { data, error } = await supabase
    .from("settings")
    .update({ value })
    .eq("key", key) // update theo key
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteSetting(key: string) {
  const { data, error } = await supabase
    .from("settings")
    .delete()
    .eq("key", key) // xoá theo key
    .select()
    .single();

  if (error) throw error;
  return data;
}
export async function getSettings(): Promise<SettingMap> {
  const { data, error } = await supabase.from("settings").select("*");

  if (error) {
    throw error;
  }
  const settings = data.reduce(
    (acc: SettingMap, item: { key: keyof SettingMap; value: string }) => {
      acc[item.key] = item.value;
      return acc;
    },
    {} as SettingMap
  );
  return settings;
}
