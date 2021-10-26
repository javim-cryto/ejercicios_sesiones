const foo = async () => {
  const promesa2 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('segunda promesa');
    }, 5000);
  });
  console.log(promesa2);

  new Promise((resolve, reject) => {
    resolve('primera promesa');
  }).then((response) => console.log(response));
};

foo();
