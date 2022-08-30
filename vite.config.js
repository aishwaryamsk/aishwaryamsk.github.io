import { defineConfig } from 'vite'
import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import inject from "@rollup/plugin-inject";
import nodePolyfills from "rollup-plugin-polyfill-node";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  define: {
    global: "globalThis",
  },
  plugins: [
    svelte(),
    inject({
      util: "util/",
    }),
  ],
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()],
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
})

