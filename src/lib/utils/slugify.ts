export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")                  // remove accents
    .replace(/[\u0300-\u036f]/g, "")  // remove accents
    .replace(/[^a-z0-9\s-]/g, "")     // remove invalid chars
    .replace(/\s+/g, "-")             // collapse whitespace and replace with -
    .replace(/-+/g, "-")              // collapse dashes
}
