var util = require('util');
var name = 'nate';
var money = 33;
// prints: nate has 33 dollars
console.log(util.format('%s has %d dollars', name, money));

console.log(util.isArray([])); // true
console.log(util.isArray({ length: 0 })); // false
console.log(util.isDate(new Date())); // true
console.log(util.isDate({})); // false
console.log(util.isError(new Error('This is an error'))); // true
console.log(util.isError({ message: 'I have a message' })); // false