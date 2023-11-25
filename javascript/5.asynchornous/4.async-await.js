function printAfter(seconds, message) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(message);
    }, seconds * 1000);
  });
}

/* const promise1 = printAfter(5, 'hi there 5 seconds later');
promise1.then(function (value) {
  console.log(value);
  const after1Second = printAfter(1, 'hi there 1 second later');
  after1Second.then(function (value) {
    console.log(value);
  });
});
 */

async function printMessage() {
  const message1 = await printAfter(5, 'hi there 5 seconds later');
  const message2 = await printAfter(1, 'hi there 1 seconds later');
  console.log(message1);
  console.log(message2);
}

printMessage();
