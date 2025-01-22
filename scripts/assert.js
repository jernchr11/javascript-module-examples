export function assert(condition) {
    if (!condition) {
        throw new Error("Assertion failed");
    }
}