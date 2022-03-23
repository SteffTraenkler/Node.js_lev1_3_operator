const { account } = require('./functions.js')

console.log(account(3, 5, '+'));
console.log(account(3, 5, '-'));
console.log(account(3, 5, '*'));
console.log(account(3, 5, '/'));
console.log(account(3, 0, '/'));
console.log(account(3, 5, 'a'));