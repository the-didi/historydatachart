import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  Components({ resolvers: [AntDesignVueResolver()] }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  base: "./",
  server: {
    host: '0.0.0.0',
    port: 4090,
    open: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://81.68.76.155:8090',
        rewrite: path => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
      '/machine': {
        target: 'http://127.0.0.1:7846',
        rewrite: path => path.replace(/^\/machine/,''),
        changeOrigin: true
      }
    }
  },
  build: {
    target: "es2015",
    cssTarget: "chrome79",
    chunkSizeWarningLimit: 2000,
    outDir: "paixifont",
    assetsDir: "static",
    manifest: false,
  }
})
