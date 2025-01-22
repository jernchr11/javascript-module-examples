import { fibonacci } from "./fibonacci.js";

self.onmessage = (e) => {
    const result = fibonacci(e.data.input);
    postMessage(result);
};