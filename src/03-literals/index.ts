// TypeScript Learning Example: Literal Types
// This file demonstrates literal types, string literal unions, numeric literals, and boolean literals.

export {};

// 1. String Literal Types
// Instead of accepting any string, we can restrict a variable or parameter to exact string values.
type Direction = "left" | "right" | "up" | "down";

function move(d: Direction): void {
    console.log(`Moving in direction: ${d}`);
}

// Valid usage with exact literal value
move("left");

const myDirection = "right"; // Inferred as string, but TypeScript allows const context or literal assignment
move(myDirection);

// Using explicit type annotation
let customDir: Direction = "up";
move(customDir);

// Invalid usage (will cause a TypeScript compile error):
// move("backward"); // Error: Argument of type '"backward"' is not assignable to parameter of type 'Direction'.

// 2. Numeric Literal Types
// Restricting values to specific numbers.
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(roll: DiceRoll): void {
    console.log(`Rolled a: ${roll}`);
}

rollDice(6); // Valid
// rollDice(7); // Error: Argument of type '7' is not assignable to parameter of type 'DiceRoll'.

// 3. Boolean Literal Types
type TrueOrFalse = true; // Useful in advanced type programming and conditional types
const alwaysTrue: TrueOrFalse = true;

// 4. Combining Literals in Union Types for State Management
type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: string };
type ErrorState = { status: "error"; error: string };

type NetworkState = LoadingState | SuccessState | ErrorState;

function handleNetworkResponse(state: NetworkState): string {
    // Discriminated unions using literal property 'status'
    switch (state.status) {
        case "loading":
            return "Loading data...";
        case "success":
            return `Success! Data: ${state.data}`;
        case "error":
            return `Failed! Error: ${state.error}`;
    }
}

const currentState: NetworkState = { status: "success", data: "User Profile Loaded" };
console.log(handleNetworkResponse(currentState));
