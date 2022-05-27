function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    if(b===0){return;}
    return a/b;
} 

/**
 * Function takes an operator and 2 numbers and then calls one of
 * the add/subtract/multiply/divide functions on the numbers
*/
function operate(operator, a, b){
    return operator(a,b);
}