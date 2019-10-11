const lowerCase = require('./ex01')
const upperCase = require('./ex02')
const length = require('./ex03')
const decapitalize = require('./ex05')
const capitalize = require('./ex04')
const kebabcase = require('./ex06')
const snakecase = require('./ex07')
const swapcase = require('./ex08')
const charAt = require('./ex09')
const first = require('./ex10')
const last = require('./ex11')
const substr = require('./ex12')
const Slice = require('./ex13')



console.log('lowerCase:')
console.log(lowerCase('Chopper'))
console.log(lowerCase('TONY TONY'))

console.log('upperCase:')
console.log(upperCase('Chopper'))
console.log(upperCase('tony Tony'))

console.log('length:')
console.log(length('Chopper'))

console.log('decapitalize:')
console.log(decapitalize('Woonan'))
console.log(decapitalize('El Drago'))

console.log('capitalize:')
console.log(capitalize('one Code'))
console.log(capitalize('One CODE', true))

console.log(kebabcase("love one code"));
console.log(kebabcase("LoveOneCode"));
console.log(kebabcase("-Love-One-Code-"));

console.log(snakecase('gold d roger'));
console.log(snakecase('GoldDRoger'));

console.log(swapcase('One Code'));
console.log(swapcase('1337 Fruits'));

console.log(charAt('chopper', 0));
console.log(charAt('chopper', 1));

console.log(first('chopper'));
console.log(first('chopper',2));
console.log(first('tony',5));

console.log(last('chopper'));
console.log(last('chopper',2));

console.log(substr('tony tony chopper', 10));
console.log(substr('chopper',2,2));

console.log(Slice('chOpper', 1));
console.log(Slice('chOpper',-4));
console.log(Slice('chOpper',1,4));

