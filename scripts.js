

/**
 * Opperation functions
 */

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



/**
 * buttons = elements with class name button
 * Create an array from buttons nodelist
 * for each button in the array, add an event listener that listens for click event
 * on click, call appendNumber function
 * 
 * appendNumber() recieves the event that called it
 * target of event is button that was clicked
 * const variable button is set to the target of event
 * output.textContent is appended with the button.value
 * 
 */
const output = document.getElementById('output');
const buttons = document.getElementsByClassName('button');
Array.from(buttons).forEach(button => button.addEventListener('click', appendNumber));
function appendNumber(event){
    const button = event.target;
    if(button.value === '='){
        return;
    }
    output.textContent += button.value;
}

/**
 * Removes the last character of the output.textContent when
 * delete button is clicked
 */
const deleteButton = document.getElementById('del-button');
deleteButton.addEventListener('click', (event) => {
    output.textContent = output.textContent.slice(0,-1);    
});
/**
 * When clear button is clicked the textContent
 * of clearButton is replaced with an empty string
 */
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', (event) => {
    output.textContent = '';
});

const equalsButton = document.getElementById('equals-button');
equalsButton.addEventListener('click', doMath);
