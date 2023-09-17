const sumAll = function(num1, num2) {
    let sum = 0;
    let startNum = num1;
    let finalNum = num2;

    if(num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number"){
        return "ERROR"
    }

    if(num1 > num2){
        finalNum = num1;
        startNum = num2;
    }

    for(let i = startNum; i <= finalNum; i++){
        sum += i;
    }

    return sum;

    /*
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    */

    // another way with array destructuring
    // if (min > max) [min, max] = [max, min];
};

// Do not edit below this line
module.exports = sumAll;
