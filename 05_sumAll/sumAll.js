const sumAll = function(numberOne, numberTwo) {
    var sum = 0;
    if (numberOne < numberTwo) {
        for (let i = numberOne; i <= numberTwo; i++) {
            sum += i;
        };
    } else if (numberOne > numberTwo) {
        for (let i = numberOne; i >= numberTwo; i--) {
            sum += i;
        };
    } else if (numberOne < 0 || numberTwo < 0) {
        return "ERROR";
    }
    return sum;
};

/*const sumAll = function(numberOne, numberTwo) {
    var sum = 0;
    for (let i = numberOne; i <= numberTwo; i++) {
        sum += i;
        };
        return sum;
};*/

// Do not edit below this line
module.exports = sumAll;
