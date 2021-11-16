const { hasDuplicateValues } = require("./isValidPermutation");

let iterations = 0;

const backtrack = (solutions = [], digits = []) => {
    iterations++;
    
    if (digits.length === 2) {
        const productOfFirstTwoDigits = digits[0] * digits[1];
        if (productOfFirstTwoDigits !== 24) {
            return;
        }
    }

    if (digits.length === 3) {
        const sumOfOneAndThree = digits[0] + digits[2];
        const totalOfAllDigitsExceptSecond = 2 * sumOfOneAndThree;
        if (totalOfAllDigitsExceptSecond + digits[1] !== 22) {
            return;
        }
    }

    if (digits.length === 4) {
        const secondDigitIsDoubleFourthDigit = digits[3] * 2 === digits[1];
        if (!secondDigitIsDoubleFourthDigit) {
            return;
        }
    }

    if (digits.length === 5) {
        const sumOfFirstAndThird = digits[0] + digits[2];
        const sumOfLastTwo = digits[3] + digits[4];
        
        if (sumOfFirstAndThird !== sumOfLastTwo) {
            return;
        }

        const sumOfAllDigits = digits[0] + digits[1] + digits[2] + digits[3] + digits[4];
        
        if (sumOfAllDigits !== 22) {
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
console.log("count", iterations);