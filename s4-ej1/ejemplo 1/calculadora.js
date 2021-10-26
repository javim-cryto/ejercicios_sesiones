const tipoOperacion = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch (tipoOperacion) {
  case 'suma':
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    break;
  case 'resta':
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
    break;
  case 'multiplica':
    console.log(`${num1} * ${num2} = ${num1 * num2}`)
    break;
  case 'divide':
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
    break;
  default:
    break;
}
