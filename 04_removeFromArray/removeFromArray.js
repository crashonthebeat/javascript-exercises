const removeFromArray = function() {
    const args = Array.from(arguments)

    for (let i = 1; i < args.length; i++) {
        if (args[0].includes(args[i])) {
            let index = args[0].indexOf(args[i])
            args[0].splice(index, 1)
        } else { }
    }    

    return args[0]
};

// Do not edit below this line
module.exports = removeFromArray;
