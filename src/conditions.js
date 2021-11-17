const conditions = [
  (xs) => productOfFirstTwoDigits(xs) === 24,
  (xs) => secondDigitIsDoubleFourthDigit(xs),
  (xs) => sumOfFirstAndThirdDigits(xs) === sumOfLastTwoDigits(xs),
  (xs) => sumOfAllDigits(xs) === 22,
  (xs) => hasDuplicateValues(xs),
];

const productOfFirstTwoDigits = (xs) => xs[0] * xs[1];
const secondDigitIsDoubleFourthDigit = (xs) => xs[3] * 2 === xs[1];
const sumOfFirstAndThirdDigits = (xs) => xs[0] + xs[2];
const sumOfLastTwoDigits = (xs) => xs[3] + xs[4];
const sumOfAllDigits = (xs) => xs.reduce((a, c) => a + c);
const hasDuplicateValues = (xs) => {
  const uniqueCount = new Set(xs).size;
  return uniqueCount !== xs.length;
};
const firstThreeDigitsCanProduceValidTotal = (xs) => {
  const sumOfOneAndThree = xs[0] + xs[2];
  const totalOfAllDigitsExceptSecond = 2 * sumOfOneAndThree;
  return totalOfAllDigitsExceptSecond + xs[1] === 22;
};

const isValidPermutation = (xs) => {
  let isValid = true;
  for (let i = 0; i < conditions.length; i++) {
    if (!conditions[i](xs)) {
      isValid = false;
      break;
    }
  }
  return isValid;
};

module.exports = {
  isValidPermutation,
  hasDuplicateValues,
  productOfFirstTwoDigits,
  secondDigitIsDoubleFourthDigit,
  sumOfFirstAndThirdDigits,
  sumOfLastTwoDigits,
  sumOfAllDigits,
  firstThreeDigitsCanProduceValidTotal,
};
