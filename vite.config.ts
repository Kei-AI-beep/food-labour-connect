
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ローカル開発環境とGitHub Pages環境を区別する条件分岐
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/food-labour-connect/" : "/",
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
});
