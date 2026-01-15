import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-pc-builder/', // เพิ่มบรรทัดนี้เพื่อให้ลิงก์ไฟล์ CSS/JS ถูกต้อง
})