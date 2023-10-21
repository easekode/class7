/*
steps in preparing tea
inputs: water, tea-powder, sugar(taste, color, quantity, form)
output: tea

    1. boil water
    2. put tea in cup
    3. pour water in cup
    4. add sugar
    5. stir
    6. drink

*/
/*
pan contains water
pan contains milk
tea-bag contains tea
*/
// primitive data types
// string
var message = 'hello';
var names = 'John';
var courseName = 'MERN stack';
// console.log(message, name, courseName);

// console.log(age);
// console.log(amount);
// boolean
var isCompleted = true;
var isGraduated = false;
// console.log(isCompleted);
var earthIn2025;
// undefined:it is declared without value
// console.log(earthIn2025);
var emptyBox = null;
// console.log(emptyBox);

// number
var age = 10; // integer
var amount = 10.7; // float
// console.log(amount);
var bigNumber = Number.MAX_SAFE_INTEGER;
// console.log(1 + 1);
// console.log(bigNumber + 10);
// console.log(bigNumber);
var bigInteger = BigInt(bigNumber);
// console.log(bigInteger);
var big10 = BigInt(10);
// console.log(bigInteger + big10);
// console.log(bigInteger + 10); //error: cannot mix bigInt and other types

var name = 'Roshan';
var title = 'Singha';
var age = 19.5;
var bloodGroup = 'AB+';
var address = 'Silchar';
var isMarried = false;
var isGraduated = false;

// object is composite
var person = {
  name: 'Roshan', //key:value pair
  title: 'Singha',
  age: 19.5,
  bloodGroup: 'AB+',
  isGraduated: false,
};

// console.log(person);
// reserved words are also known as keywords
function addNumbers(x, y, w) {
  var z = x + y + w;

  return z;
}

var result = addNumbers(3, 1, 8);
// console.log(result);

// composite datatype
var car = {
  company: 'TATA',
  name: 'Harrier',
  priceInLakhs: 32,
  honk: function () {
    console.log('honking!!!!');
  },
  accelerate: function () {
    console.log('Accelerating!!!!');
  },
};

// console.log(car);
// console.log(car.company);
// car.honk();
// car.accelerate();

// 1 d array
var showRoomCarNames = ['Harrier', 'Safari', 'Nexon'];
// var worldCupSquadNames = ['Virat', 'Rohit'];
// console.log(showRoomCarNames);
// console.log(showRoomCarNames.length);
console.log(showRoomCarNames[2]);
// egg from the 3,4
