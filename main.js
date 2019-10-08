const lowerCase = require('./ex01')
const upperCase = require('./ex02')
const length = require('./ex03')
const decapitalize = require('./ex05')
const capitalize = require('./ex04')
const kebabCase = require('./ex06')

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

console.log('kebabCase:')
console.log(length('love one code'))
console.log(length('LoveOneCode'))

