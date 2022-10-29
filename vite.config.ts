/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  // Have the server at port 3000 default
  server: { host: '0.0.0.0', port: 3000 },
  plugins: [
    ViteAliases({
      useConfig: true,
      deep: false,
      depth: 0,
      useTypescript: true
    }),
    react(),
    svgr()
  ]
})
