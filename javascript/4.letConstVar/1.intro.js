/* // var
//is function scoped if defined inside the function,
// global scoped if it's defined anywhere in the file
if (true) {
  var testName = 'John';
  console.log(testName);
}
function sayHello() {
  var name = 'John';
  console.log(name);
  console.log('inside function', testName);
}
sayHello();
// console.log(name); //<- this will throw an error
console.log('outside', testName);
 */
/* // let
// is block scoped if defined inside block,
// global scoped if it's defined globally
let globalName = 'My name is global John';
if (true) {
  let testName = 'John';
  console.log(testName);
  console.log('inside ', globalName);
}

// console.log('outside', testName); //<- this will throw an error
console.log('outside', globalName);
 */

const globalName = 'My name is global John';
let testName = 'John';
testName = 'Jane';
console.log(testName);
// globalName = 'Jane'; //<- this will throw an error

const PI = 3.14;
const dollarSign = '$';

const person = {
  name: 'John',
  age: 30,
};

/* person = {
  name: 'Jane',
  age: 25,
}; */
// constant objects can be changed but cannot be reassigned
person.name = 'Jane';
console.log(person);
