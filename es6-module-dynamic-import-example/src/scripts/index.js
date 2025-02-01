const inputElement = document.querySelector(".input-value");
const resultElement = document.querySelector(".result");

document.querySelector(".factorial-button").addEventListener("click", calculateFactorial);
document.querySelector(".fibonacci-button").addEventListener("click", calculateFibonacci);

async function calculateFactorial() {
    const { factorial } = await import('./factorial.js');
    
    const input = inputElement.valueAsNumber;
    
    const result = factorial(input);
    resultElement.innerHTML = result.toLocaleString();
}

async function calculateFibonacci() {
    const { fibonacci } = await import('./fibonacci.js');

    const input = inputElement.valueAsNumber;

    const result = fibonacci(input);
    resultElement.innerHTML = result.toLocaleString();
}