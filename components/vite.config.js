import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { glob } from 'glob'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const tsFiles = glob.sync('**/*.ts', { cwd: __dirname, absolute: false })

const input = {}
tsFiles.forEach(file => {
  const entryName = file.replace(/\.ts$/, '')
  input[entryName] = resolve(__dirname, file)
})

if (Object.keys(input).length === 0) {
  throw new Error('No TypeScript files found')
}

// Exclude bundle.ts from the multi-entry build
const inputWithoutBundle = { ...input }
delete inputWithoutBundle['bundle']

export default defineConfig(({ mode }) => {
  const common = {
    resolve: {
      alias: {
        '@nectary/shared': resolve(__dirname, 'utils/shared'),
      },
    },
    build: {
      minify: false,
      outDir: __dirname,
    },
  }

  if (mode === 'bundle') {
    return {
      ...common,
      build: {
        ...common.build,
        lib: {
          entry: resolve(__dirname, 'bundle.ts'),
          formats: ['es'],
        },
        rollupOptions: {
          output: {
            inlineDynamicImports: true,
            entryFileNames: 'bundle.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
          },
        },
      },
    }
  }

  return {
    ...common,
    build: {
      ...common.build,
      lib: {
        entry: inputWithoutBundle,
        formats: ['es'],
      },
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
    },
  }
})
