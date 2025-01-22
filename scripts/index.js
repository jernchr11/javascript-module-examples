import { factorial } from "./factorial.js";
import { fibonacci } from "./fibonacci.js";
//import * as Comlink from "../node_modules/comlink/dist/esm/comlink.js";

// const fibWorker = new Worker("scripts/fib-worker.js", { type: "module" });

//const fibWorker = Comlink.wrap(new Worker(new URL('./fib-worker-comlink.js', import.meta.url), { type: "module" }));

function calculateFactorial() {
    const inputElement = document.querySelector(".input-value");
    const input = inputElement.valueAsNumber;
    const result = factorial(input);

    const resultElement = document.querySelector(".result");
    resultElement.innerHTML = result.toLocaleString();
}

async function calculateFibonacci() {
    const inputElement = document.querySelector(".input-value");
    const input = inputElement.valueAsNumber;

    const result = fibonacci(input);
    const resultElement = document.querySelector(".result");
    resultElement.innerHTML = result.toLocaleString();

    /*
    fibWorker.postMessage({ input });
    fibWorker.onmessage = e => {
        const resultElement = document.querySelector(".result");
        resultElement.innerHTML = e.data.toLocaleString();        
    }
    */

    /*
    const result = await fibWorker.calculate(input);
    const resultElement = document.querySelector(".result");
    resultElement.innerHTML = result.toLocaleString();
    */
}

const factorialButton = document.querySelector(".factorial-button");
factorialButton.addEventListener("click", calculateFactorial);

const fibButton = document.querySelector(".fib-button");
fibButton.addEventListener("click", calculateFibonacci);