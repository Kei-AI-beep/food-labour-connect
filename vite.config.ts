
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// 環境変数に基づいてbaseパスを設定
export default defineConfig({
  base: "/",  // まずはシンプルに「/」に設定
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInlineLimit: 0, // ファビコンなどの小さいファイルもインライン化せずに出力する
  }
});
