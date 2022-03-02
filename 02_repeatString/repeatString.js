const repeatString = function(string, num) {
    const hey = [];
    for (let i = 0; i < num; i++) {
        hey.push(string);
    } if (num < 0) {
        return "ERROR";
    }
    return hey.join('');
}

// Do not edit below this line
module.exports = repeatString;
