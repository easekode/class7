/* console.log(1 + 1);
console.log(1 + 'hrl');
console.log(5 / '2');
console.log(5 - '2');
console.log('hello ' + 'world');
 */

// template literals
const score = 3;
const name = 'john';
('john scored 3 runs');
// console.log(name 'scored'+score 'runs')
// console.log(name 'scored' + score 'runs')
// console.log(name + 'scored ' + score);
// console.log(name + ' scored ' + score + ' runs');
const message = 'John scored 3 runs, good batsman';
console.log('length of message is ' + message.length);
/* for (let i of message) {
  console.log(i);
} */

console.log(message.substring(1, 3));
console.log(message.replace('good', 'bad'));
const newMessage = '    hello';
console.log(newMessage.trim());
console.log(message.startsWith('John'));
console.log(message.includes('bad'));
console.log('Free '.repeat(5));

console.log(message.split('3').length);
console.log(`${name} scores ${score} runs`); //template literals
