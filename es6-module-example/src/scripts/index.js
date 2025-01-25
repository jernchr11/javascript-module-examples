import { factorial } from "./factorial.js";
import { fibonacci } from "./fibonacci.js";

const inputElement = document.querySelector(".input-value");
const resultElement = document.querySelector(".result");

document.querySelector(".factorial-button").addEventListener("click", calculateFactorial);
document.querySelector(".fibonacci-button").addEventListener("click", calculateFibonacci);

function calculateFactorial() {
    const input = inputElement.valueAsNumber;
    
    const result = factorial(input);
    resultElement.innerHTML = result.toLocaleString();
}

function calculateFibonacci() {
    const input = inputElement.valueAsNumber;

    const result = fibonacci(input);
    resultElement.innerHTML = result.toLocaleString();
}