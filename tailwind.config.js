/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- เพิ่มบรรทัดนี้เข้าไป (ห้ามลืมลูกน้ำปิดท้าย)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}