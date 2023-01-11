const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++) {
        let index = 0;
        let found = false;
        for (let j = 0; j < array.length; j++) {
            if (array[j] === arguments[i]) {
                found = true;
                index = j;
            }
        }
        if (found) {array.splice(index, 1);}
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
