const {
  hasDuplicateValues,
  productOfFirstTwoDigits,
  secondDigitIsDoubleFourthDigit,
  sumOfFirstAndThirdDigits,
  sumOfLastTwoDigits,
  sumOfAllDigits,
  firstThreeDigitsCanProduceValidTotal,
} = require("./conditions");

const backtrack = (solutions = [], digits = []) => {
  if (digits.length === 2 && productOfFirstTwoDigits(digits) !== 24) {
    return;
  }

  if (digits.length === 3 && !firstThreeDigitsCanProduceValidTotal(digits)) {
    return;
  }

  if (digits.length === 4 && !secondDigitIsDoubleFourthDigit(digits)) {
    return;
  }

  if (digits.length === 5) {
    if (sumOfFirstAndThirdDigits(digits) !== sumOfLastTwoDigits(digits)) {
      return;
    }

    if (sumOfAllDigits(digits) !== 22) {
      return;
    }

    if (!hasDuplicateValues(digits)) {
      return;
    }

    solutions.push(digits.join(""));
    return;
  }

  for (let i = 0; i < 10; i++) {
    const next = [...digits, i];
    backtrack(solutions, next);
  }

  return solutions;
};

const solutions = backtrack();
console.log(solutions);
