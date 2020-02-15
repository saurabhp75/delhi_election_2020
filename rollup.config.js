import { terser } from "rollup-plugin-terser";

export default [
{
  input: 'delhiIndex.js',
  external: ['d3'],
  output: {
    file: 'delhiBundle.js',
    format: 'iife',
    sourcemap: false,
    globals: { d3: 'd3' }
  },
  plugins: [terser()]
}];
