// What digit is at the given place value in num?
// Convert number to its abs value, divide it by whatever position it is (with exp of 10), then round it to floor to remove decimals with modulo.
function getDigitFrom(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

// const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;;

// How many digits are in num?
// Log10 - to which power of 10 gives us this number?? (Unless 0, which will give us infinity, hence default it to 1);
function getIntLength(num) {
    return (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

// How many digits does the integer with the most digits have?
// uses the previous function, literally just iterating through to check the max # of digits, replacing the previous highest etc
function getMaxDigits(nums) {
    let maxDigits = 0;

    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }

    return maxDigits;
}

// Assume the above are pre-defined, explain only their inputs and what they do

function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    if (arr.length <= 1) {
        return arr;
    }

    // first, find the max # of digits to determine how many iterations
    // then, create empty buckets in each iteration to hold 0 to 9 digit in that place
    // iterate through the arr of numbers, sorting them into their respective buckets based on the digit
    let maxDigits = getMaxDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({length: 10}, () => [])

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        arr = [].concat(...buckets);
    }
    return arr;
}

module.exports = {
    radixSort
};