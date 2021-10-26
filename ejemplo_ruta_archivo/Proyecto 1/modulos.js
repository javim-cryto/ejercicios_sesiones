const os = require('os');

console.log('hostname: ' + os.hostname());

var colors = require('colors');

console.log('hello'.green.bgYellow); // outputs green text
console.log('i like cake and pies'.underline.red); // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('OMG is color zebra!'.zebra);
console.log('Run the trap'.trap); // Drops the bass
