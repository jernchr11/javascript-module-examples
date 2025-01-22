import isEqual from "../node_modules/lodash-es/isEqual.js";

export function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    if (isEqual(n, 1) || isEqual(n, 2)) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}