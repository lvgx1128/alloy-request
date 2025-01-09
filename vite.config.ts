import { defineConfig } from 'vite'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import filesize from 'rollup-plugin-filesize'
import typescript from 'rollup-plugin-typescript2'
import path from 'path'
import clear from 'rollup-plugin-clear'

export default defineConfig({
  build: {
    outDir: 'packages',
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      name: 'alloy',
      fileName: (format, entryName) => `${format}/${entryName}.js`
    }
  },
  plugins: [
    clear({
      targets: ['packages/*']
    }),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      useTsconfigDeclarationDir: true
    }),
    peerDepsExternal(),
    filesize()
  ]
})
