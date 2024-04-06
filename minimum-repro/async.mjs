import { setTimeout } from 'timers/promises';

const registry = new FinalizationRegistry((i) => {
  console.log(`[i=${i}] cleanup callback is called.`);
});
class Foo {
  constructor(i) {
    console.log(`[i=${i}] Foo's constructor is called.`);
    registry.register(this, i);
  }
}
for (let i = 0; i < 3; i++) {
  new Foo(i);
  global.gc();
  await setTimeout(0);
}
