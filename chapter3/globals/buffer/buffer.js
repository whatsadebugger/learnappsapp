// a string
var str = 'Hello Buffer World!';
// From string to buffer
var buffer = new Buffer(str, 'utf-8');
// From buffer to string
var ineedastring = buffer.toString('utf-8');
console.log(ineedastring); 