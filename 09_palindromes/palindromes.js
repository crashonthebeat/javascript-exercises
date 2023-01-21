const palindromes = function (string) {
    let result = 1;

    string = string.replace(' ','')

    for (let i = 1; i < string.length; i++) {
        if (string[i].match(/^[a-zA-Z]+$/)) {}
        else {string = string.replace(string[i],'')}
    }

    // string = string.replace(/[!]/g,"")

    return string

    for (let i = 0; i < string.length; i++) {
        let n = string.length - (1+i);
        if (string[i].toLowerCase() != string[n].toLowerCase()) {
            result = 0;
        } else { }
    }
    
    return Boolean(result)
};

// Do not edit below this line
module.exports = palindromes;
