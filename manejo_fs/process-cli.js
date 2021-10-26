console.log(process.argv);
//preocess ya cuenta con 2 argumentos pre definidos
const option = process.argv[2];
const first_value = process.argv[3];
const second_value = process.argv[4];

switch(option){
  case 'sumar':
    console.log(`la suma de  ${first_value} + ${second_value} es:  ${parseInt(first_value) + parseInt(second_value)}`);
    break;
  case 'restar':
    console.log(`la resta de  ${first_value} + ${second_value} es:  ${parseInt(first_value) - parseInt(second_value)}`);
    break;
}