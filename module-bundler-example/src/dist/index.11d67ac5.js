function $39cd4a60c4fe4ea6$export$a7a9523472993e97(condition, message) {
    if (!condition) throw new Error(`Assertion failed: ${message}`);
}


function $631b35649bdea045$export$329ce89a99f0e343(n) {
    (0, $39cd4a60c4fe4ea6$export$a7a9523472993e97)(n >= 0, "n must be greater than zero");
    if (n === 0 || n === 1) return 1;
    return n * $631b35649bdea045$export$329ce89a99f0e343(n - 1);
}



function $cb34c806e0a3a82b$export$c5881d03e4853ba0(n) {
    (0, $39cd4a60c4fe4ea6$export$a7a9523472993e97)(n >= 0, "n must be greater than zero");
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    // Intentionally inefficient. See the web worker bundling example.
    return $cb34c806e0a3a82b$export$c5881d03e4853ba0(n - 1) + $cb34c806e0a3a82b$export$c5881d03e4853ba0(n - 2);
}


const $6b612c05f80b81c9$var$inputElement = document.querySelector(".input-value");
const $6b612c05f80b81c9$var$resultElement = document.querySelector(".result");
document.querySelector(".factorial-button").addEventListener("click", $6b612c05f80b81c9$var$calculateFactorial);
document.querySelector(".fibonacci-button").addEventListener("click", $6b612c05f80b81c9$var$calculateFibonacci);
function $6b612c05f80b81c9$var$calculateFactorial() {
    const input = $6b612c05f80b81c9$var$inputElement.valueAsNumber;
    const result = (0, $631b35649bdea045$export$329ce89a99f0e343)(input);
    $6b612c05f80b81c9$var$resultElement.innerHTML = result.toLocaleString();
}
function $6b612c05f80b81c9$var$calculateFibonacci() {
    const input = $6b612c05f80b81c9$var$inputElement.valueAsNumber;
    const result = (0, $cb34c806e0a3a82b$export$c5881d03e4853ba0)(input);
    $6b612c05f80b81c9$var$resultElement.innerHTML = result.toLocaleString();
}


//# sourceMappingURL=index.11d67ac5.js.map
