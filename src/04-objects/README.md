# Module 04: Objects & Shapes

## What the Topic Is
Object types and shapes define the expected structure of objects in TypeScript, including required properties, optional properties (`?`), readonly fields (`readonly`), index signatures, and utility types like `Record`.

## Why It Matters
Structuring objects precisely prevents runtime property-access errors and provides clear autocompletion when passing data between components and services.

## Complete Code Example
```typescript
// TypeScript Learning Example: Object Types and Shapes
// This file demonstrates how to define and work with object types, optional properties, readonly fields, index signatures, and utility types.

export {};

// 1. Basic Object Type (Type Alias)
type UserObject = {
    id: string;             // Required property
    name: string;           // Required property
    email?: string;         // Optional property (can be string or undefined)
    readonly createdAt: Date; // Readonly property (cannot be reassigned after initialization)
};

// Creating objects adhering to the UserObject type
const firstUser: UserObject = {
    id: "u1",
    name: "Alice Smith",
    email: "alice@example.com",
    createdAt: new Date()
};

const secondUser: UserObject = {
    id: "u2",
    name: "Bob Jones",
    // email is optional, so it can be omitted
    createdAt: new Date()
};

// firstUser.createdAt = new Date(); // Error: Cannot assign to 'createdAt' because it is a read-only property.

// 2. Optional Properties vs Explicit 'undefined'
type OptionalEmail = { email?: string };           // email may be omitted or undefined
type ExplicitUndefinedEmail = { email: string | undefined }; // email property MUST be present, but its value can be string or undefined

// const validObj: ExplicitUndefinedEmail = {}; // Error: Property 'email' is missing.
const validObj2: ExplicitUndefinedEmail = { email: undefined }; // Valid

// 3. Index Signatures (Dynamic Object Keys)
// Used when you don't know all property names in advance, but know their value types.
type ScoreBoard = {
    [playerName: string]: number;
};

const gameScores: ScoreBoard = {
    "Alice": 95,
    "Bob": 82,
    "Charlie": 88
};

// 4. Utility Types for Objects: Record<K, T>
// Constructs an object type with a set of properties K of type T.
type Metrics = Record<"likes" | "views" | "shares", number>;

const postMetrics: Metrics = {
    likes: 150,
    views: 1200,
    shares: 45
};

// const invalidMetrics: Metrics = {
//     likes: 150,
//     views: 1200,
//     shares: 45,
//     comments: 10 // Error: Object literal may only specify known properties, and 'comments' does not exist in type 'Metrics'.
// };

console.log(`User 1: ${firstUser.name}, Views: ${postMetrics.views}`);
```

## How the Code Works Line by Line
1. **Object Type**: `UserObject` defines required (`id`, `name`), optional (`email?`), and readonly (`createdAt`) properties.
2. **Optional vs Explicit Undefined**: Demonstrates the difference between omitting a property (`?`) and requiring the property key to be present with an explicit `undefined` value.
3. **Index Signatures**: `[playerName: string]: number` permits dynamic property keys with numeric values.
4. **Record Utility**: `Record<"likes" | "views" | "shares", number>` enforces exact keys with typed values.

## Expected Output
```text
User 1: Alice Smith, Views: 1200
```

## Common Mistakes & Anti-Patterns
- Confusing optional properties (`email?: string`) with properties that must exist with an explicit `undefined` (`email: string | undefined`).
- Attempting to modify `readonly` properties after object initialization.
