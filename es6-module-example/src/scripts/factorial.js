import { assert } from "./assert.js";

export function factorial(n) {
    assert(n >= 0, "n must be greater than zero");

    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}