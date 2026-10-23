# Module 22: Generics (`<T>`)

## What the Topic Is
Generics (`<T>`) allow you to create reusable, type-safe functions, classes, and structures where the type is parameterized and preserved across inputs and outputs.

## Why It Matters
Generics provide the flexibility of `any` combined with the rigorous type safety of strict TypeScript, ensuring types are remembered and enforced consistently.

## Complete Code Example
```typescript
// TypeScript Learning Example: Generics (`<T>`)
// This file demonstrates how to write reusable, type-safe functions and structures using generic type parameters,
// generic constraints, multiple type parameters, and compares generics with `unknown`.

export {};

// 1. Basic Type Parameters (`<T>`)
// Generics allow functions to accept types as parameters. `T` acts as a placeholder for whatever type is passed in.
function id<T>(x: T): T {
    return x;
}

const numResult = id(42);        // TypeScript infers T as number
const strResult = id("hello");   // TypeScript infers T as string
const boolResult = id(true);     // TypeScript infers T as boolean

console.log(`Identity results: ${numResult}, ${strResult}, ${boolResult}`);

// 2. Generic Functions with Arrays
// Generics let you enforce that the return type matches the type of items inside an input array or data structure.
function getElement<T>(arr: T[], index: number): T | undefined {
    return arr[index];
}

const numbers = [10, 20, 30, 40, 50];
const firstNum = getElement(numbers, 1); // Type is number | undefined

const fruits = ["apple", "banana", "cherry"];
const secondFruit = getElement(fruits, 2); // Type is string | undefined

console.log(`Element at index 1: ${firstNum}, Fruit at index 2: ${secondFruit}`);

// 3. Generic Object Wrappers
// Generics can be used to wrap data or build reusable structures (like API responses or containers).
function wrap<T>(value: T): { value: T; createdAt: Date } {
    return {
        value,
        createdAt: new Date(),
    };
}

const wrappedNumber = wrap(100); // { value: number; createdAt: Date }
const wrappedUser = wrap({ name: "Alice", role: "Admin" });

console.log(`Wrapped value: ${wrappedUser.value.name} (Created at: ${wrappedUser.createdAt.toISOString()})`);

// 4. Generic Constraints (`extends`)
// Sometimes you need a generic type to satisfy certain requirements (e.g., having a `.length` property).
// You can use `extends` to constrain `T`.
function logLength<T extends { length: number }>(item: T): T {
    console.log(`Length: ${item.length}`);
    return item;
}

logLength("Hello TypeScript"); // string has .length
logLength([1, 2, 3, 4]);     // array has .length
logLength({ length: 10, name: "custom object" }); // object with length property
// logLength(123); // Error: number does not have a length property

// 5. Multiple Type Parameters (`<T, U>`)
// You can define multiple generic parameters for mapping, merging, or converting between different types.
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ id: 1, name: "Bob" }, { role: "Developer", active: true });
console.log(`Merged User: ${merged.name} is a ${merged.role}`);

// 6. Generics vs. `unknown`
// - `unknown` means "we don't know the type yet, and you must prove or narrow it before using it."
// - Generics (`<T>`) mean "whatever type goes in, the type-checker remembers and enforces consistently across inputs and outputs."

function processUnknown(val: unknown): unknown {
    // To do anything specific with `val`, you must narrow it or cast it
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    return val;
}

function processGeneric<T>(val: T): T {
    // `T` is preserved. If you pass a string, TypeScript knows the return type is string
    // without needing type guards or casting.
    return val;
}

const processedStr = processGeneric("hello generics"); // Type is strictly string
console.log(processedStr.toUpperCase());
```

## How the Code Works Line by Line
1. **Basic Generics**: `function id<T>(x: T): T` preserves the input type as the return type.
2. **Generic Arrays**: `getElement<T>(arr: T[], index: number): T | undefined`.
3. **Generic Constraints**: `<T extends { length: number }>` restricts `T` to items with a `length` property.
4. **Multiple Parameters**: `<T, U>` merges two generic object types.

## Expected Output
```text
Identity results: 42, hello, true
Element at index 1: 20, Fruit at index 2: cherry
Wrapped value: Alice (Created at: [ISO Date])
Length: 16
Length: 4
Length: 10
Merged User: Bob is a Developer
HELLO GENERICS
```

## Common Mistakes & Anti-Patterns
- Using `any` when generics (`<T>`) should be used to maintain type relationships between inputs and outputs.
