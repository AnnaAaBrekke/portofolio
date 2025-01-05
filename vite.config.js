import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {},
    },
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets", // Ensure CSS/JS/images go to 'dist/assets'
  },
});
