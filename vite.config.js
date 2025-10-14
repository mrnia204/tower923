
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/_redirects', // source file
          dest: '.'                 // copy to root of dist
        }
      ]
    })
  ],
  build: {
    minify: 'esbuild',
    sourcemap: false,
  }
})

