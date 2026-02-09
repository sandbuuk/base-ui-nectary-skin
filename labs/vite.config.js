import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const tsFiles = glob.sync('**/*.ts', {
  cwd: __dirname,
  absolute: false,
  ignore: ['**/*.d.ts'],
})

const input = {}

tsFiles.forEach((file) => {
  const entryName = file.replace(/\.ts$/, '')

  input[entryName] = resolve(__dirname, file)
})

if (Object.keys(input).length === 0) {
  throw new Error('No TypeScript files found')
}

export default defineConfig({
  plugins: [
    {
      name: 'html-raw-import',
      enforce: 'pre',
      resolveId(source, importer) {
        if (source.endsWith('.html') && importer) {
          const resolved = resolve(dirname(importer), source)

          return `${resolved}?raw`
        }
      },
      load(id) {
        if (id.endsWith('.html?raw')) {
          const filePath = id.replace(/\?raw$/, '')
          const content = readFileSync(filePath, 'utf-8')

          return `export default ${JSON.stringify(content)}`
        }
      },
    },
  ],
  build: {
    minify: false,
    outDir: __dirname,
    lib: {
      entry: input,
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^@nectary\/components/],
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
})
