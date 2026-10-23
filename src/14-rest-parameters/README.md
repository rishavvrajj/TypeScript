# Module 14: Rest Parameters & Tuples

## What the Topic Is
Rest parameters (`...args`) combined with typed arrays, labeled tuples, and tuple spreading.

## Why It Matters
Rest parameters allow functions to accept an arbitrary number of arguments safely, while tuple spreading ensures that arrays passed as rest arguments maintain precise type checking.

## Complete Code Example
```typescript
// TypeScript Learning Example: Rest Parameters and Rest Tuples
// This file demonstrates how to use rest parameters (`...args`) with typed arrays and tuples.

export {};

// 1. Basic Rest Parameters (`number[]`)
// Allows a function to accept any number of arguments as an array.
function sumAllNumbers(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(`Sum: ${sumAllNumbers(1, 2, 3, 4, 5)}`); // 15

// 2. Rest Parameters with Labeled Tuples
// You can type rest parameters as fixed tuples, including optional and default values.
function makeRange(...args: [start: number, end: number, step?: number]): number[] {
    const [start, end, step = 1] = args;
    const output: number[] = [];

    for (let n = start; n <= end; n += step) {
        output.push(n);
    }
    return output;
}

console.log(`Range (1 to 5):`, makeRange(1, 5));         // [1, 2, 3, 4, 5]
console.log(`Range (1 to 10 step 2):`, makeRange(1, 10, 2)); // [1, 3, 5, 7, 9]

// 3. Spreading Tuples into Functions
// When passing an array/tuple into a function using the spread operator (`...`),
// TypeScript needs to know the exact tuple types to ensure type safety.
function drawPoint(x: number, y: number): void {
    console.log(`Drawing point at X: ${x}, Y: ${y}`);
}

// Regular arrays are inferred as number[], which cannot be spread directly into fixed parameters
// const looseCoords = [10, 20];
// drawPoint(...looseCoords); // Error: A spread argument must either have a tuple type or be passed to a rest parameter.

// Solution 1: Use a typed tuple
const strictTuple: [number, number] = [10, 20];
drawPoint(...strictTuple); // Valid!

// Solution 2: Use `as const` assertion on the array literal
const readonlyTuple = [30, 40] as const;
drawPoint(...readonlyTuple); // Valid!
```

## How the Code Works Line by Line
1. **Rest Parameters**: `...numbers: number[]` collects any number of arguments into a typed array.
2. **Rest Tuples**: `[start: number, end: number, step?: number]` enforces exact parameter structures.
3. **Tuple Spreading**: Explains why typed tuples or `as const` are required when spreading arrays into function arguments.

## Expected Output
```text
Sum: 15
Range (1 to 5): [ 1, 2, 3, 4, 5 ]
Range (1 to 10 step 2): [ 1, 3, 5, 7, 9 ]
Drawing point at X: 10, Y: 20
Drawing point at X: 30, Y: 40
```

## Common Mistakes & Anti-Patterns
- Attempting to spread an unconstrained `number[]` array into a function requiring fixed positional parameters without using a tuple or `as const`.
