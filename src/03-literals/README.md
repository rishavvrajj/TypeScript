# Module 03: Literal Types

## What the Topic Is
Literal types allow you to specify exact, precise values (such as specific strings, numbers, or booleans) that a variable or parameter can hold, rather than broad types like `string` or `number`.

## Why It Matters
Literal types power state management, configuration flags, and discriminated unions, ensuring that only valid, predefined values can be passed into functions or stored in states.

## Complete Code Example
```typescript
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
```

## How the Code Works Line by Line
1. **String Literals**: `Direction` restricts strings to `"left"`, `"right"`, `"up"`, or `"down"`.
2. **Numeric Literals**: `DiceRoll` restricts numbers to `1 | 2 | 3 | 4 | 5 | 6`.
3. **Discriminated Unions**: `NetworkState` uses the literal property `status` to differentiate between loading, success, and error states safely in a `switch` statement.

## Expected Output
```text
Moving in direction: left
Moving in direction: right
Moving in direction: up
Rolled a: 6
Success! Data: User Profile Loaded
```

## Common Mistakes & Anti-Patterns
- Passing a general `string` variable into a function expecting a strict string literal union without widening or type casting.
- Forgetting a case in a discriminated union switch statement.
