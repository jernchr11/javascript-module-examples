import { fibonacci } from "./fibonacci.js";
import * as Comlink from "../node_modules/comlink/dist/esm/comlink.js";

const worker = {
    calculate(n) {
        return fibonacci(n);
    }
}

Comlink.expose(worker);