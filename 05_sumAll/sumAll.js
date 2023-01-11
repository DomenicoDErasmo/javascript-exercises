const sumAll = function(start, last) {
    if (typeof(start) !== "number" || typeof(last) !== "number" || start < 0 || last < 0) {return "ERROR";}
    let result = 0;
    if (start > last) {
        for (let i = last; i <= start; i++) {
            result += i;
        }
    } else {
        for (let i = start; i <= last; i++) {
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
