import { defineConfig } from 'rollup'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import typescript from '@rollup/plugin-typescript'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const config = defineConfig({
  input: {
    index: resolve(__dirname, 'src/node/index.ts')
  },
  output: {
    dir: './dist',
    format: 'esm',
  
    sourcemap: true
  },
  plugins: [
    typescript({
      tsconfig: resolve(__dirname, 'src/node/tsconfig.json'),
      declaration: true,
      declarationDir: './dist/node'
    })
  ]
})

export default config