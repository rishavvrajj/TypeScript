// TypeScript Learning Example: Type Assertions and Type Guards
// This file demonstrates how to use type assertions (`as`), non-null assertions (`!`), const assertions (`as const`), and runtime type guards (`v is Type`).

export {};

// 1. Type Assertions (`as`)
// Telling the TypeScript compiler to treat a value as a specific type.
// Useful when you know more about a value's type than TypeScript can infer (e.g., parsing JSON).
const rawJson = '{"id": 1, "name": "Alice"}';
1
// Using 'as' assertion (unsafe if the JSON structure doesn't match!)
const riskyUser = JSON.parse(rawJson) as { id: number; name: string };
console.log(`User Name: ${riskyUser.name}`);

// 2. Non-Null Assertion Operator (`!`)
// Tells TypeScript that a value is definitely not null or undefined, bypassing strict null checks.
function getElement(id: string): HTMLElement | null {
    return document.getElementById(id);
}

// const element = getElement("main")!; // Asserts that element is NOT null/undefined

// 3. Const Assertions (`as const`)
// Deeply freezes an object or array, making all properties readonly and turning values into literal types.
const config = {
    endpoint: "https://api.example.com",
    timeout: 5000
} as const;

// config.timeout = 10000; // Error: Cannot assign to 'timeout' because it is a read-only property.

// 4. User-Defined Type Guards (`v is Type`)
// The safe, runtime-checked alternative to type assertions when dealing with unknown data (like APIs or JSON).
type UserAssertion = {
    id: number;
    name: string;
};

// Type guard function: returns a boolean and acts as a type predicate (`v is UserAssertion`)
function isUser(value: unknown): value is UserAssertion {
    return (
        typeof value === "object" &&
        value !== null &&
        "id" in value &&
        typeof (value as Record<string, unknown>).id === "number" &&
        "name" in value &&
        typeof (value as Record<string, unknown>).name === "string"
    );
}

// Safely parsing and validating unknown data at runtime
const parsedData: unknown = JSON.parse(rawJson);

if (isUser(parsedData)) {
    // Inside this block, TypeScript automatically knows parsedData is of type UserAssertion!
    console.log(`Verified Safe User ID: ${parsedData.id}`);
} else {
    console.log("Invalid user data format received.");
}