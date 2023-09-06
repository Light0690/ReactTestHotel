import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base : '/ReactTestHotelFront/',
  build: {
    chunkSizeWarningLimit:3000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/components/UI"),
      "@ux": path.resolve(__dirname, "./src/components/UX"),
      "@constans": path.resolve(__dirname, "./src/constans"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@Interfaces": path.resolve(__dirname, "./src/Interfaces"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@redux": path.resolve(__dirname, "./src/redux"),
    },
  },
  plugins: [react()],
})
