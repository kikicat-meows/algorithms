// What digit is at the given place value in num?
function getDigitFrom(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

// const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;;

// How many digits are in num?
function getIntLength(num) {
    return (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

// How many digits does the integer with the most digits have?
function getMaxDigits(nums) {

}

// Assume the above are pre-defined, explain only their inputs and what they do

function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    if (arr.length <= 1) {
        return arr;
    }

}

module.exports = {
    radixSort
};