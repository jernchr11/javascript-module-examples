import { assert } from "./assert.js";
import { isEqual } from 'lodash-es';

export function factorial(n) {
    assert(n >= 0, "n must be greater than zero");

    if (isEqual(n, 0) || isEqual(n, 1)) {
        return 1;
    }
    return n * factorial(n - 1);
}