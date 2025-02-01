import { assert } from "./assert.js";

export function fibonacci(n) {
    assert(n >= 0, "n must be greater than zero");

    if (n === 0) {
        return 0;
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    // Intentionally inefficient. See the web worker bundling example.
    return fibonacci(n - 1) + fibonacci(n - 2);
}