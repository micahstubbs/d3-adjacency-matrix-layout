import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  format: 'umd',
  globals: {
    d3: 'd3'
  },
  moduleName: 'd3',
  plugins: [ json(), babel() ],
  dest: 'build/d3-adjacency-matrix-layout.js'
};