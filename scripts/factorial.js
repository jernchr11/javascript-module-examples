import { assert } from "./assert.js";

export function factorial(n) {
    assert(n > 0);

    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}