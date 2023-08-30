import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/new-react-app-catatan-belanja',
  plugins: [react()],
})
