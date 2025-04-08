// build.js
const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./src/entrypoint.ts'],
    bundle: true,
    platform: 'node',
    outfile: 'dist/entrypoint.js',
    target: 'node20',
  })
  .catch(() => process.exit(1));
