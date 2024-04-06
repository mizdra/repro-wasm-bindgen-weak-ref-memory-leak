import { MyBuffer } from './wasm/my-buffer.js';

for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
  MyBuffer.new(0xFFFF);
}
