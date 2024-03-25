"use strict";
function maxNumber(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(maxNumber([1, 2, 3, 4, 5, 6]));
