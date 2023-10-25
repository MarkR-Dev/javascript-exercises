const fibonacci = function(number) {
    let total = 1;
    let first = 1;
    let second = 1;

    if(number < 0){
        return "OOPS"
    }

    

    for(let i = 1; i <= number; i++){
        if(i === 1 || i === 2){
            continue;
        }
        total = first + second;
        first = second;
        second = total;


    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
