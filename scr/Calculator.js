let currentInput = "";

function updateDisplay() {
if (typeof document !== 'undefined') {
document.getElementById('result').value = currentInput;
}
}

function appendValue(value) {
currentInput += value;
updateDisplay();
}

function appendOperator(operator) {
if (!/[+\-*/]$/.test(currentInput)) {
currentInput += operator;
updateDisplay();
}
}

function clearResult() {
currentInput = "";
updateDisplay();
}

function calculate() {
try {
    const result = eval(currentInput);
currentInput = result.toString();
} catch (e) {
currentInput = "Erreur";
}
updateDisplay();
}

// Fonction exportable pour Jest
function evaluateExpression(expression) {
if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
throw new Error("Expression invalide");
}
return eval(expression);
}

if (typeof module !== 'undefined') {
module.exports = {
calculate: evaluateExpression
};
}
