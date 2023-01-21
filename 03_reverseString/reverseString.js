const reverseString = function(string) {

    let newString = '';


    for (let i = 0; i < string.length; i++) {
        let replacewith = string.length-(1+i);

        newString += string.charAt(string.length-(1+i))
    }

    return newString
};

// Do not edit below this line
module.exports = reverseString;
