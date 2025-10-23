import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // KRİTİK AYAR: Yayınlamak için depo adınızı buraya ekliyoruz.
  // URL'niz: https://[Kullanıcı Adınız].github.io/mscolorweb/
  base: '/', 
})