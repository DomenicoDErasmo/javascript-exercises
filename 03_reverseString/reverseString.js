const reverseString = function(string) {
    let result = "";
    let letters = string.split("");
    for (let i = letters.length - 1; i >= 0; i--) {
        result += letters[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
