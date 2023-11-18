/* function stepOne() {
  setTimeout(function () {
    console.log('stepOne '); // chef1 starter(chicken soup)
  }, 3000);
}

function stepTwo() {
  setTimeout(function () {
    console.log('stepTwo'); // chef2 main course (chicken biryani)
  }, 4000);
}

function stepThree() {
  setTimeout(function () {
    console.log('stepThree'); // chef3 desert (ice cream)
  }, 1000);
}

stepTwo();
stepThree();
stepOne(); */

function stepOne(cb) {
  setTimeout(function () {
    console.log('stepOne ');
    cb();
  }, 3000);
}

function stepTwo(cb) {
  setTimeout(function () {
    console.log('stepTwo'); // chef2 main course (chicken biryani)
    cb();
  }, 4000);
}

function stepThree(cb) {
  setTimeout(function () {
    console.log('stepThree');
    cb(); // chef3 desert (ice cream)
  }, 1000);
}

stepOne(function () {
  stepTwo(function () {
    stepThree(function () {
      console.log('done');
    });
  });
});
