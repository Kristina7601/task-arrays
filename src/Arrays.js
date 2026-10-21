function arraySorting(str) {
    const arr = str.split(',');
    const sortedArr = arr.map(Number).sort((a, b) => a - b);
    return sortedArr.join(',');
}

function arrayFiltering(arr) {
    return arr.filter((num) => num <= 100);
}

function arrayPushing(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}

module.exports = {
    arraySorting,
    arrayFiltering,
    arrayPushing,
};
