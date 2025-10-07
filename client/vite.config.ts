import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// To allow a specific host (e.g., "my-allowed-host.com") for the dev server, add the `server.allowedHosts` option:
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['archegoniate-computably-fleta.ngrok-free.dev'], // Replace with your allowed URL/host
  },
})

