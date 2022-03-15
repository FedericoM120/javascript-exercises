/*const sumAll = function(numberOne, numberTwo) {
    var sum = 0;
    if (numberOne < numberTwo) {
        for (let i = numberOne; i <= numberTwo; i++) {
            sum += i;
        };
    }; else (numberOne > numberTwo) {
        for (let i = numberOne; i >= numberTwo; i--) {
            sum += i;
        };
    };
    return sum;
};*/

const sumAll = function(numberOne, numberTwo) {
    var sum = 0;
    for (let i = numberOne; i <= numberTwo; i++) {
        sum += i;
        };
        return sum;
};

// Do not edit below this line
module.exports = sumAll;
