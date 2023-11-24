// wait, broken, fulfilled
// pending, rejected/fulfilled
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('rejected'); // goes to catch
    resolve('fulfilled'); // goes to then
  }, 5000);
});

console.log(promise);
promise
  .then((data) => {
    console.log('inside then', data);
  })
  .catch((err) => {
    console.log('inside catch', err);
  })
  .finally(() => {
    console.log('inside finally');
  });
