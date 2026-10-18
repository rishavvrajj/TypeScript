// TypeScript Learning Example: Parameter and Return Type Annotations
// Learn how to annotate function parameters and return types for better safety and documentation.

export {};

// 1. Basic Function with Parameter and Return Types
// Always annotate parameters and return types for public or exported functions.
function add(a: number, b: number): number {
    return a + b;
}

// Calling the function
console.log(add(5, 7)); // 12

// 2. Functions with Multiple Parameter Types
// Use union types when a parameter can accept more than one type.
function formatInput(value: string | number): string {
    if (typeof value === "number") {
        return `Number: ${value}`;
    }
    return `Text: ${value.toUpperCase()}`;
}

console.log(formatInput(42));
console.log(formatInput("hello"));

// 3. Arrow Functions with Type Annotations
// Arrow functions can also have explicit parameter and return type annotations.
const timesTwo = (n: number): number => n * 2;
console.log(timesTwo(8)); // 16

// 4. Object Parameters
// Define object shape using type alias or interface.
type Point = {
    x: number;
    y: number;
};

// Function that takes a Point object and returns its distance from origin.
function distanceFromOrigin(p: Point): number {
    // Math.hypot calculates sqrt(x^2 + y^2)
    return Math.hypot(p.x, p.y);
}

console.log(distanceFromOrigin({ x: 3, y: 4 })); // 5

// 5. Optional Parameters
// Use ? to mark a parameter as optional.
// Optional parameters must come after required parameters.
function greet(name: string, greeting?: string): string {
    const msg = greeting ?? "Hello";
    return `${msg}, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));

// 6. Default Parameters
// Provide default values directly in the parameter list.
function createUser(name: string, age: number = 0): { name: string; age: number } {
    return { name, age };
}

console.log(createUser("Charlie"));        // { name: 'Charlie', age: 0 }
console.log(createUser("Dana", 25));       // { name: 'Dana', age: 25 }

// 7. Void Return Type
// Use void for functions that do not return a meaningful value.
function logMessage(msg: string): void {
    console.log(`[LOG] ${msg}`);
    // No return statement needed, or return undefined;
}

logMessage("This is a log message");

// 8. Never Return Type
// Use never for functions that never return (they always throw or loop infinitely).
function throwError(message: string): never {
    throw new Error(message);
}

// Uncommenting the next line will cause a runtime error:
// throwError("Something went wrong");
