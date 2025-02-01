import isEqual from "../node_modules/lodash-es/isEqual.js";
import { assert } from "./assert.js";

export function factorial(n) {
    assert(n >= 0, "n must be greater than zero");

    if (isEqual(n, 0) || isEqual(n, 1)) {
        return 1;
    }
    return n * factorial(n - 1);
}