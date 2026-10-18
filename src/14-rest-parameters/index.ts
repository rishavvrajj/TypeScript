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
