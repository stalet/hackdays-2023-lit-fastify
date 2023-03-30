import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        plugins: [
            nodeResolve({ browser: true, preferBuiltins: false }),
            commonjs({
                include: /node_modules/,
            }),
            typescript({ compilerOptions: { module: 'ES6' } }),
            replace({
                preventAssignment: true,
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            terser({
                format: {
                    comments: false,
                },
            }),
        ],
        input: 'src/hydrate.ts',
        output: [
            {
                inlineDynamicImports: true,
                sourcemap: true,
                format: 'esm',
                file: 'eik/esm.js',
            },
        ],
    },
];
