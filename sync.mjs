import { MyBuffer } from './wasm/my-buffer.js';

if (!global.gc) throw new Error('Run with --expose-gc');

for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
  MyBuffer.new(0xFFFF);
  global.gc();
}
