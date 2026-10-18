// TypeScript Learning Example: Function Return Types
// This file demonstrates how TypeScript infers or requires explicit return types on functions.

export {};

// 1. Inferred Return Types
// TypeScript can automatically deduce what a function returns based on its return statements.
const double = (n: number) => n * 2; // TypeScript infers return type is number

export function formatGreeting(name: string): string {
    return `Hello, ${name}!`;
}

// 2. Multiple Return Paths
// TypeScript checks all return paths to ensure they match the declared return type.
function booleanToNumber(flag: boolean): number {
    if (flag) {
        return 1;
    } else {
        return 0;
    }
}

console.log(booleanToNumber(true));  // 1
console.log(booleanToNumber(false)); // 0

// 3. Asynchronous Functions and Promises
// Async functions always wrap their return value in a Promise.
async function fetchUserCount(): Promise<string> {
    // Simulating async operation
    return "42";
}

fetchUserCount().then(count => console.log(`Fetched count: ${count}`));

// 4. Why Explicit Return Types Matter
// While TypeScript can infer return types, adding explicit annotations on exported or public APIs:
// - Acts as documentation for other developers.
// - Prevents accidental changes to return structures.
// - Catches bugs early if a function's implementation changes unexpectedly.
