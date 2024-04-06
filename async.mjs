import { MyBuffer } from './wasm/my-buffer.js';
import { setTimeout } from 'timers/promises';

if (!global.gc) throw new Error('Run with --expose-gc');

for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
  MyBuffer.new(0xFFFF);
  global.gc();
  await setTimeout(0);
}
