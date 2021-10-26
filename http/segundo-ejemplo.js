const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = async () => {
  console.log('foo');
  // bar();
  await setTimeout(bar, 0);
  baz();
};

awaitfoo();
