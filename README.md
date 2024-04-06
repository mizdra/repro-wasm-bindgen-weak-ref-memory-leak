## How to run
```console
$ npm i

$ # Run it, wait a few seconds, and it crashes.
$ node --wasm-max-mem-pages=3000 sync.mjs
wasm://wasm/00012936:1


RuntimeError: unreachable
    at __rg_oom (wasm://wasm/00012936:wasm-function[38]:0x37ad)
    at __rust_alloc_error_handler (wasm://wasm/00012936:wasm-function[54]:0x38e8)
    at alloc::alloc::handle_alloc_error::hcc94dbd37c0a15ab (wasm://wasm/00012936:wasm-function[59]:0x3925)
    at mybuffer_new (wasm://wasm/00012936:wasm-function[23]:0x341d)
    at MyBuffer.new (/Users/mizdra/src/github.com/mizdra/repro-wasm-bindgen-weak-ref-memory-leak/wasm/my-buffer.js:69:26)
    at file:///Users/mizdra/src/github.com/mizdra/repro-wasm-bindgen-weak-ref-memory-leak/sync.mjs:4:15
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)

Node.js v21.4.0

$ # Run it, wait a few seconds, and it doesn't crash.
$ node --wasm-max-mem-pages=3000 async.mjs

$ node --expose-gc minimum-repro/sync.mjs
[i=0] Foo's constructor is called.
[i=1] Foo's constructor is called.
[i=2] Foo's constructor is called.
[i=2] cleanup callback is called.
[i=1] cleanup callback is called.
[i=0] cleanup callback is called.

$ node --expose-gc minimum-repro/async.mjs
[i=0] Foo's constructor is called.
[i=0] cleanup callback is called.
[i=1] Foo's constructor is called.
[i=1] cleanup callback is called.
[i=2] Foo's constructor is called.
[i=2] cleanup callback is called.
```

## How to build wasm
```console
$ cargo install --force wasm-bindgen-cli@0.2.92
$ rustup target add wasm32-unknown-unknown
$ cargo build --release --target wasm32-unknown-unknown
$ wasm-bindgen --out-name my-buffer --target nodejs --out-dir wasm --weak-refs ./target/wasm32-unknown-unknown/release/my_buffer.wasm
```
