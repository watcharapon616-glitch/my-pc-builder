import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // แก้เป็น '/' เพราะตอนนี้ builder.zynksite.com คือหน้าแรกสุดของโปรเจกต์นี้ครับ
})