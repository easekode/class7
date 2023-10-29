var evenNumbers = [2, 4, 6, 8, 10];
// var evenNumbers = Array(2, 4, 6, 'seven', 10);

// console.log(typeof evenNumbers);

/* //mutable operations/functions
// adding element to array
evenNumbers.push(12);
console.log(evenNumbers);
// removing element from array
evenNumbers.pop();
console.log(evenNumbers); 

evenNumbers.splice(0, 3);// removes 3 elements from index 0
console.log(evenNumbers);
*/
// console.log(evenNumbers);

// looping array
/* for (i = 0; i <= evenNumbers.length - 1; i++) {
  console.log(evenNumbers[i]);
} */

/* // immutable operations/functions
console.log(evenNumbers.length);
var result = evenNumbers.slice(0, 3); // 0,1,2
console.log(result);
console.log(evenNumbers); */

// the callback will be called for each element of the array
/* evenNumbers.forEach(function (element) {
  console.log(element);
}); */

/* for (i = 0; i <= evenNumbers.length - 1; i++) {
  console.log(evenNumbers[i]);
} */

console.log(evenNumbers);
var result = evenNumbers.map(function (element) {
  return element * 2;
});
console.log(result);
console.log(evenNumbers);
