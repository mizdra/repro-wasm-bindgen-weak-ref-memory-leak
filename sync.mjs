import { MyBuffer } from './wasm/my-buffer.js';

for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
  await MyBuffer.new(0xFFFF);
}
