// TypeScript Learning Example: Basic Type Inference and Annotations
// This file demonstrates TypeScript's type inference capabilities and explicit type annotations

// Basic type inference - TypeScript automatically infers the type
let count = 0; // inferred as number

// Explicit type annotation - useful when we want to be specific
const site: string = "example.com";

// Array type inference - TypeScript infers number[]
const scores = [10, 20, 30];

// Union types - a variable that can hold multiple types
let maybe: string | number;

// Type inference in action - TypeScript infers string | number
maybe = Math.random() > 0.5 ? "Test" : 10;

// Function with explicit parameter and return type annotations
export function add(a: number, b: number): number {
    return a + b;
}

// Calling the function and logging the result
console.log(add(5, 5));

// Demonstrating type safety - this would cause a TypeScript error:
// maybe = {}; // Error: Type '{}' is not assignable to type 'string | number'.

// Interface example for object typing
interface User {
    id: number;
    name: string;
    email?: string; // optional property
}

// Creating a user object with type inference
const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

console.log(`User: ${user.name}`);