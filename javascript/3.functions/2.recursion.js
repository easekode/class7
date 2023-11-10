/* for (let i = 0; i < 10; i++) {
  console.log(i);
}
 */
// recursive function calls itself
function recuriveFunction(i) {
  // there is a condition to stop the recursion
  if (i < 10) {
    console.log(i);
    recuriveFunction(i + 1);
  }
}

recuriveFunction(0);
