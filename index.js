function capitalised(string){
    let lowerCase = string.toLowerCase();
    let firstLetter = lowerCase.slice(0,1);
    let capital = lowerCase.replace(firstLetter, firstLetter.toUpperCase());
    return capital;
}

module.exports = capitalised