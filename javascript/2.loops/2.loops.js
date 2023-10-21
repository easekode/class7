/*
 var i = 1;  initialization
 i< 5; condition 
 i++ <- incrementation, i = i + 1

 initialize once

 if condition is true, execute the body
 increment i
*/
for (var i = 1; i < 6; ++i) {
  console.log('hello');
}

var i = 1;
while (i < 6) {
  console.log('while loop');
  ++i;
}

var i = 6;
do {
  console.log('do while');
  i = i + 1;
} while (i < 6);
