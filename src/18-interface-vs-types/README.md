# Module 18: Interfaces vs. Type Aliases

## What the Topic Is
Comparing interfaces (`interface`) and type aliases (`type`) across declaration merging, extension syntax, unions, and primitives.

## Why It Matters
Knowing when to use `interface` vs `type` helps maintain consistent architecture across object-oriented and functional TypeScript codebases.

## Complete Code Example
```typescript
// TypeScript Learning Example: Interfaces vs Type Aliases
// This file contrasts interfaces (`interface`) and type aliases (`type`) across declaration merging, extension, unions, and primitives.

export {};

// 1. Object Shapes: Both can define object shapes
interface UserInterface {
    id: string;
    name: string;
}

type UserType = {
    id: string;
    name: string;
};

const user1: UserInterface = { id: "1", name: "Alice" };
const user2: UserType = { id: "2", name: "Bob" };

console.log(`Interface User: ${user1.name}, Type User: ${user2.name}`);

// 2. Declaration Merging (Unique to Interfaces)
// Interfaces automatically merge multiple declarations with the same name.
// Type aliases do NOT support declaration merging (attempting to redeclare a type alias causes a duplicate identifier error).
interface Config {
    endpoint: string;
}

interface Config {
    timeout: number;
}

const appConfig: Config = {
    endpoint: "https://api.example.com",
    timeout: 5000
};

console.log(`Config -> Endpoint: ${appConfig.endpoint}, Timeout: ${appConfig.timeout}`);

// 3. Inheritance / Extension (`extends` vs Intersection `&`)
// Interfaces extend other interfaces using `extends`.
// Type aliases combine types using intersection (`&`).
interface BaseEntity {
    id: string;
    createdAt: Date;
}

interface Product extends BaseEntity {
    title: string;
    price: number;
}

type BaseEntityAlias = {
    id: string;
    createdAt: Date;
};

type ProductAlias = BaseEntityAlias & {
    title: string;
    price: number;
};

const item: Product = {
    id: "p-1",
    createdAt: new Date(),
    title: "TypeScript Handbook",
    price: 29.99
};

console.log(`Product: ${item.title} ($${item.price})`);

// 4. Primitives, Unions, and Tuples (Unique to Type Aliases)
// Type aliases can name primitive types, union types, tuples, and function signatures.
// Interfaces cannot directly alias primitives or union types.
type ID = string | number;
type Status = "active" | "suspended" | "terminated";
type PointTuple = [number, number];

const userId: ID = "usr_999";
const userStatus: Status = "active";
const coordinates: PointTuple = [10.5, 20.1];

console.log(`User ID: ${userId}, Status: ${userStatus}, Coords: [${coordinates.join(", ")}]`);
```

## How the Code Works Line by Line
1. **Object Shapes**: Demonstrates that both interfaces and type aliases can type object structures.
2. **Declaration Merging**: Shows how interfaces merge duplicate names, whereas type aliases throw errors.
3. **Extension vs Intersection**: Compares `extends` vs `&`.
4. **Primitives and Unions**: Shows capabilities unique to type aliases.

## Expected Output
```text
Interface User: Alice, Type User: Bob
Config -> Endpoint: https://api.example.com, Timeout: 5000
Product: TypeScript Handbook ($29.99)
User ID: usr_999, Status: active, Coords: [10.5, 20.1]
```

## Common Mistakes & Anti-Patterns
- Using type aliases when declaration merging is needed for third-party library augmentations.
- Using interfaces when defining union types or primitive aliases.
