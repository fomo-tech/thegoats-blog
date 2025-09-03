import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/**
 * ESLint Flat Config cho Next.js + TypeScript
 */
const eslintConfig = [
  // ✅ Kế thừa từ Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Áp dụng cho toàn bộ project
  {
    rules: {
      // Cho phép <img>
      "@next/next/no-img-element": "off",
    },
  },

  // ✅ Áp dụng riêng cho file TS/TSX
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      // Tắt cảnh báo biến chưa dùng
      "@typescript-eslint/no-unused-vars": "off",
      // Tắt cảnh báo dùng any
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]

export default eslintConfig
