const removeFromArray = function(array, ...target) {
    /*

    My own method:

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < target.length; j++){
            if(array[i] === target[j]){
                array.splice(i, 1);
                // i-- here steps the array position back to account for the shortening of the array when removing
                i--;
                
            }
        }
    }

    return array;
    */

    /*

    for each method using array.includes

    const newArray = [];

    array.forEach((arrayItem) => {
        if(!target.includes(arrayItem)){
            newArray.push(arrayItem);
        }
    })
 
    return newArray;

    */

    //simple but more advanced method of using filter

    return array.filter(value => !target.includes(value))

};

// Do not edit below this line
module.exports = removeFromArray;
