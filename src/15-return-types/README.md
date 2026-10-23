# Module 15: Return Types

## What the Topic Is
Inferred and explicit function return types, multiple return paths, asynchronous promises, and why explicit return annotations matter.

## Why It Matters
Explicit return type annotations serve as documentation, protect against accidental signature changes, and ensure functions return what callers expect.

## Complete Code Example
```typescript
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
```

## How the Code Works Line by Line
1. **Inference**: `double` has its return type inferred automatically.
2. **Explicit Annotations**: `formatGreeting` explicitly declares `: string`.
3. **Async Functions**: `fetchUserCount` returns a `Promise<string>`.

## Expected Output
```text
1
0
Fetched count: 42
```

## Common Mistakes & Anti-Patterns
- Omitting explicit return type annotations on public library functions or exported modules, leading to fragile API contracts if internal implementations change.
