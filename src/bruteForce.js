const { isValidPermutation } = require("./conditions");

const splitInteger = (x) => {
  const padded = x.toString().padStart(5, "0");
  const array = padded.split("");
  const arrayOfNums = array.map((x) => Number(x));
  return arrayOfNums;
};

const bruteForce = () => {
  const validPermutations = [];
  const max = 99999;
  let current = 0;

  while (current <= max) {
    if (isValidPermutation(splitInteger(current))) {
      validPermutations.push(current);
    }
    current += 1;
  }

  return validPermutations;
};

const solutions = bruteForce();
console.log(solutions);
