// Objective: What is callback function
// Ans: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function printHello(person, callbackFunction) {
  console.log('Hello', person.name, 'I am ', person.age, 'years old');
  callbackFunction(person);
}

/* printHello('Aditya', 9);
printHello('Birdhan', 10);
 */

function hasScoredCentury(person) {
  if (person.runs >= 100) {
    console.log(person.name, 'has scored century');
  } else {
    console.log(person.name, 'has not scored century');
  }
}

var aditya = {
  name: 'Aditya',
  age: 9,
  runs: 100,
};
var birdhan = {
  name: 'Birdhan',
  age: 10,
  runs: 60,
};
printHello(aditya, hasScoredCentury);
// printHello(birdhan);

// a machine to cook rice

/* machineCookRice(rice, water) {

}

machineCookRice('basmati rice', 'bislery water');

f(x) = x + 1;

f(2) = 3
f(3) = 4



 */
