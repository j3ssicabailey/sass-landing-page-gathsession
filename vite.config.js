import { defineConfig } from 'vite'
import sass from 'sass'

export default defineConfig({
    base: '/sass-landing-page-gathsession/',
    css: {
        preprocessorOptions: {
        scss: {
            implementation: sass
        }
        }
    },
    build: {
        outDir: 'dist'
    }
})