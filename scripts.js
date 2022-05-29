const currentOutput = document.getElementById('current-output');
const operandOutput = document.getElementById('operand-output');
const numberButtons = document.querySelectorAll('.number-button');
const clearButton = document.getElementById('clear-button');
const deleteButton = document.getElementById('delete-button');
const operandButtons = document.querySelectorAll('.operand-button');
const equalsButton = document.getElementById('equals-button');
let a = 0;
let b = 0;
let symbol = '';
numberButtons.forEach(button=>{
    button.setAttribute('value', button.textContent);
    
    button.addEventListener('click', () => {
        if(currentOutput.textContent.length < 12 && currentOutput.textContent.charAt(0) !== '0'){
            currentOutput.textContent += button.textContent;
        }
        else if(currentOutput.textContent.length < 12){
            currentOutput.textContent = currentOutput.textContent.substring(1);
            currentOutput.textContent += button.textContent;
        }
    });
});

clearButton.addEventListener('click', () => {
    currentOutput.textContent = '0';
    operandOutput.textContent = '';
});

deleteButton.addEventListener('click', () => {
    currentOutput.textContent = currentOutput.textContent.slice(0, -1);
});

operandButtons.forEach(button => {
    button.addEventListener('click', () => {
        symbol = button.textContent;
        operandOutput.textContent += `${currentOutput.textContent}`
        a = parseInt(currentOutput.textContent);
        b = evaluateString(operandOutput.textContent);
        operandOutput.textContent = b;
        currentOutput.textContent = ` ${symbol} `;
    });
});

equalsButton.addEventListener('click', function(){
    finalNumber = operandOutput.textContent + currentOutput.textContent;
    operandOutput.textContent = `ANS ${evaluateString(finalNumber)}`;
    currentOutput.textContent = '';
    
    document.querySelectorAll('.number-button').setAttribute('disabled');
});

function evaluateString(string){
    return new Function('return ' + string)();
}

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function operate(operator, a, b){
    switch(operator){
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
        default:
            console.log('FAILED');
            break;
    }
}
