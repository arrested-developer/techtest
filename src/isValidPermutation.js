const conditions = [
    (xs) => xs[0] * xs[1] === 24,
    (xs) => xs[3] * 2 === xs[1],
    (xs) => xs[0] + xs[2] === xs[3] + xs[4],
    (xs) => xs[0] + xs[1] + xs[2] + xs[3] + xs[4] === 22,
    (xs) => hasDuplicateValues(xs)
];

const hasDuplicateValues = (xs) => {
    const uniqueCount = new Set(xs).size;
    return uniqueCount !== xs.length;
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

module.exports = { isValidPermutation, hasDuplicateValues };