const reverseString = function(sentence) {
    let backwards = "";
    for (let i = sentence.length - 1; i >= 0; i--) {
    backwards += sentence.charAt(i);
    }
    return backwards;
};

// Do not edit below this line
module.exports = reverseString;
