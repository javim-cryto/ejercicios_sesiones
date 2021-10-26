const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () => {
  console.log('foo');
  setTimeout(bar, 5000);
  setTimeout(baz, 3000);
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('should be right after baz, before bar');
    }, 10000);
  }).then((response) => console.log(response));
  console.log('fin');
};

foo();
// foo, fin, should be, baz, bar
