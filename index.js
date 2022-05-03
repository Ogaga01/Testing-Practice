function reverseString(string){
    let splitString = string.split('');
    let reverseArray = splitString.reverse();
    let newString = reverseArray.join('');
    return newString;
}
module.exports = reverseString