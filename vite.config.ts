import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh(), tsconfigPaths()],
})
