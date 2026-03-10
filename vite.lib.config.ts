import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

/**
 * Library build config — produces:
 *   dist/index.js      ESM bundle
 *   dist/index.cjs     CommonJS bundle
 *   dist/style.css     All component styles (Nectary token references preserved)
 *
 * Run with: npm run build:lib
 */
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NectaryReact',
      formats: ['es', 'cjs'],
      fileName: format => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    rollupOptions: {
      // React is provided by the consumer — do not bundle it
      external: (id) =>
        ['react', 'react-dom', 'react/jsx-runtime', '@base-ui-components/react', '@nectary/theme-base'].some(
          dep => id === dep || id.startsWith(dep + '/')
        ),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJsxRuntime',
        },
        // Keep CSS files alongside JS
        assetFileNames: 'style[extname]',
      },
    },
    // Single CSS file for easy consumer import
    cssCodeSplit: false,
    // Source maps for debugging installed package
    sourcemap: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
})
