// TypeScript Learning Example: Tuples
// A tuple is a typed array with a fixed number of elements and known, specific types at each position.

export {};

// 1. Basic Tuple Definition
// Unlike normal arrays (number[]), a tuple specifies the exact type of each index.
const userEntry: [string, number] = ["rishav", 23];

console.log(`Username: ${userEntry[0]}`);
console.log(`Age: ${userEntry[1]}`);

// TypeScript prevents invalid type assignments and index ordering:
// const invalidEntry: [string, number] = [23, "rishav"]; // Error: Type 'number' is not assignable to type 'string'.
// const tooManyElements: [string, number] = ["rishav", 23, true]; // Error: Source has 3 element(s) but target allows only 2.

// 2. Labeled Tuples
// Labels make tuples much more readable by documenting what each position represents.
type ResponseRow = [status: number, message?: string];

const successResponse: ResponseRow = [200, "OK"];
const errorResponse: ResponseRow = [500]; // message is optional

console.log(`Status: ${successResponse[0]}, Message: ${successResponse[1] ?? "N/A"}`);

// 3. Readonly Tuples
// Tuples can be marked `readonly` to prevent element modification.
// Essential for coordinates, configurations, or fixed-state pairs.
const corners: readonly [number, number] = [0, 0];

// corners[0] = 10; // Error: Cannot assign to '0' because it is a read-only property.

// 4. Destructuring Tuples
// Tuples make destructuring with exact types very clean.
const [username, age] = userEntry;
console.log(`Destructured -> User: ${username}, Age: ${age}`);