function stringLength(string){
    if (string.length > 0 && string.length <= 10)
    {return string.length;
    } else {
        throw new Error('checkfail: input less than zero or greater than 10')
    }
}
module.exports = stringLength