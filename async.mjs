import { MyBuffer } from './wasm/my-buffer.js';
import { setTimeout } from 'timers/promises';

for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
  MyBuffer.new(0xFFFF);
  await setTimeout(0);
}
