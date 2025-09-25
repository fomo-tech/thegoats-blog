export function getReadingTime(blocks: any[], wpm: number = 200) {
  // gom text từ các block
  const text = blocks
    .map(({ type, data }) => {
      switch (type) {
        case "paragraph":
        case "header":
        case "quote":
          return data?.text || "";
        case "list":
          return (data?.items || [])
            .map((item: any) => (item?.content ? item.content : item))
            .join(" ");
        case "checklist":
          return (data?.items || []).map((i: any) => i.text).join(" ");
        case "code":
          return data?.code || "";
        default:
          return "";
      }
    })
    .join(" ");

  // bỏ tag html
  const cleanText = text.replace(/<[^>]+>/g, " ").trim();

  // đếm số từ
  const words = cleanText.length > 0 ? cleanText.split(/\s+/).length : 0;

  // tính phút đọc
  return Math.max(1, Math.ceil(words / wpm)); // ít nhất 1 phút
}
