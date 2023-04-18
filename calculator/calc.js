let initialOperand = null;
let currentOperand = "";
let operator = "";
let activeDisplay = document.querySelector(".display");
// Operate Basic Arithmetic Functions
function operate(operator, initialOperand, currentOperand) {
    let num1 = parseFloat(initialOperand);
    let num2 = parseFloat(currentOperand);
    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") {
        return num1 - num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        if (num2 === 0) {
            return "undefined";
        }
        else {
            return num1 / num2;
        }
    }
}
// Operators
document.querySelectorAll(".operators").forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        initialOperand = activeDisplay.textContent;
        operator = operatorButton.textContent;
        currentOperand = "";
    })
})
// Operands
document.querySelectorAll(".operands").forEach(operand => {
    operand.addEventListener("click", () => {
        currentOperand += operand.textContent;
        activeDisplay.textContent = currentOperand;
    })
})
// Equals
document.querySelector(".equals").addEventListener("click", () => {
    let result = operate(operator, initialOperand, currentOperand);
    activeDisplay.textContent = result;
    initialOperand = null;
    currentOperand = result.toString();
})
// All Clear
document.querySelector(".allClear").addEventListener("click", () => {
    initialOperand = null;
    currentOperand = "";
    operator = "";
    activeDisplay.textContent = "0";
})
// Delete Button
document.querySelector(".delete").addEventListener("click", () => {
    currentOperand = currentOperand.slice(0, -1);
    activeDisplay.textContent = currentOperand;
})
// Decimal Point
document.querySelector(".decimalPoint").addEventListener("click", () => {
    if(!currentOperand.includes(".")) {
        currentOperand += ".";
        activeDisplay.textContent = currentOperand;
    }
})
// Percentage
document.querySelector(".percent").addEventListener("click", () => {
    currentOperand /= 100;
    activeDisplay.textContent = currentOperand;
})
// Sign Change
document.querySelector(".signChange").addEventListener("click", () => {
    currentOperand *= -1;
    activeDisplay.textContent = currentOperand;
})