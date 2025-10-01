export interface SettingMap {
  LOGO: string; // URL hoặc path ảnh
  SEO_PAGE_TITLE: string; // SEO title
  DES_PAGE: string; // SEO description
  FOOTER_DES: string; // Footer text
  FACEBOOK: string; // Link fanpage
  TELE: string; // Link Telegram
  INSTAGRAM: string; // Link Instagram
  TIKTOK: string; // Link TikTok
  YOUTUBE: string;
}

export type SettingKey = keyof SettingMap;

export interface ISetting<K extends SettingKey = SettingKey> {
  key: K;
  value: SettingMap[K];
}
