//named function
/* function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result);
 */

// anonymous function
/* const add = function (a, b) {
  return a + b;
};
const result = add(2, 3);
console.log(result); */

// IIFE
/* (function () {
  console.log('IIFE');
})(); */

/* // Arrow function
const add = (a, b) => {
  return a + b;
}; */

/* // callback function
function add(a, b, callback) {
  const result = a + b;
  callback(result);
}
add(2, 3, function (input) {
  console.log('i received===>', input);
});
 */

// higher order function
// callbacks

// Promise
// threads in javascript

// Restaurant
tables : 3
chef : 4 (veg, non-veg, chinese, italian)
waiter(thread): 1  


table1:  customer1 <-> waiter1(1min) -> takes order -> chef1(callback) (30 mins)
table2:  customer2 <-> waiter2<2nd min >  takes order -> chef2 (30 mins)
table3:  customer3 <-> waiter3<3rd min > takes order -> chef3 (30 mins)


Javascript: single threaded language

user -> ask -> javascript program -> database(se parate software, MySQL, MongoDB, Oracle)

Promise:
// 1.wait/pending  | success/resolved | failed/rejected

// callback hell

