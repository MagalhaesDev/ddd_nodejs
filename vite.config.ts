import { defineConfig } from 'vite'
import tsConfigsPaths from 'vite-tsconfig-paths'


export default defineConfig({
    plugins: [tsConfigsPaths()],
    test: {
        globals: true
    }
})