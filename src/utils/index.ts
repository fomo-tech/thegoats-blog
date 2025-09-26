export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // bỏ dấu tiếng Việt
    .replace(/[^a-z0-9]+/g, "-") // thay space/ký tự lạ bằng -
    .replace(/(^-|-$)+/g, ""); // xóa - đầu/cuối
}
