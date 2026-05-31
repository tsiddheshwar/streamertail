const fs = require('fs');
const path = require('path');

const src = require('../src/tokens/index.js');
const distDir = path.resolve(__dirname, '..', 'dist', 'tokens');

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

// CommonJS
fs.writeFileSync(path.join(distDir, 'index.js'), `'use strict';\nmodule.exports = ${JSON.stringify(src, null, 2)};\n`);

// ESM
const esmExports = Object.keys(src).map(k => `export const ${k} = ${JSON.stringify(src[k], null, 2)};`).join('\n\n');
fs.writeFileSync(path.join(distDir, 'index.mjs'), esmExports + '\n');

// JSON
fs.writeFileSync(path.join(distDir, 'tokens.json'), JSON.stringify(src, null, 2) + '\n');

// TypeScript declarations
const dtsLines = Object.keys(src).map(k => `export declare const ${k}: ${typeof src[k] === 'object' ? 'Record<string, any>' : typeof src[k]};`);
fs.writeFileSync(path.join(distDir, 'index.d.ts'), dtsLines.join('\n') + '\n');

console.log('✓ tokens built → dist/tokens/');
