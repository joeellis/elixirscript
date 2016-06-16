import { rollup } from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/javascript/elixir.js',
  dest: 'priv/Elixir.js',
  sourceMap: 'inline',
  format: 'es6',
  plugins: [
    nodeResolve({ jsnext: true }),
    babel({
      presets: ["react"],
      plugins: ["transform-class-properties"],
      babelrc: false
    })
  ]
};