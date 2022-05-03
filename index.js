const Calculator = {
    constructor(a,b)
    {this.a = a;
    this.b = b;
},
 addition(a,b){
    return a + b;
},
subtraction(a,b){
    return a - b;
},
multiplication(a,b){
    return a * b;
},
division(a,b){
    return a/b;
}
}

module.exports = Calculator;