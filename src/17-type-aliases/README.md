# Module 17: Type Aliases

## What the Topic Is
Type aliases (`type`) give descriptive names to any TypeScript type, including primitives, object shapes, union types, and intersections.

## Why It Matters
Type aliases provide flexibility by allowing you to name complex union types, primitives, and tuples that interfaces cannot represent directly.

## Complete Code Example
```typescript
// TypeScript Learning Example: Type Aliases
// This file demonstrates how to define and use type aliases (`type`) for primitives, object shapes, unions, and intersections.

export {};

// 1. Basic Type Aliases (Primitives and Aliasing)
// Type aliases can name any type, including primitives, unions, and tuples.
type UserID = string | number;
type Username = string;

const userId: UserID = "usr_12345";
const userName: Username = "Alice";

console.log(`User ${userName} has ID: ${userId}`);

// 2. Object Shapes with Type Aliases
// Type aliases are commonly used to define the shape of objects.
type Person = {
    id: string;
    address: string;
    salary: number;
    email?: string; // Optional property
};

const person: Person = {
    id: "1",
    address: "123 Main St",
    salary: 123450
};

console.log(`Person ${person.id} lives at ${person.address} with salary ${person.salary}`);

// 3. Union Types with Type Aliases
// Type aliases excel at giving readable names to complex union types.
type Status = 'new' | 'paid' | 'pending';

function nextActionCheck(status: Status): string {
    switch (status) {
        case "new":
            return 'Initialize processing';
        case "paid":
            return 'Fulfill order';
        case "pending":
            return 'Wait for payment confirmation';
        default:
            return 'Unknown action';
    }
}

console.log(nextActionCheck("paid"));

// 4. Intersection Types (`&`) for Composition
// Type aliases can combine multiple types using intersection (`&`).
type ToMerge = { price: number };
type ToMerge2 = { stock: number };

type MergedProductInfo = Person & ToMerge & ToMerge2;

const productInfo: MergedProductInfo = {
    id: "prod-99",
    address: "Warehouse A",
    salary: 5000,
    price: 99.99,
    stock: 250
};

console.log(`Product ${productInfo.id}: Price $${productInfo.price}, Stock ${productInfo.stock}`);
```

## How the Code Works Line by Line
1. **Primitive Aliasing**: `type UserID = string | number` creates a custom alias for a union.
2. **Object Shapes**: `type Person` defines an object contract.
3. **Union Aliasing**: `type Status` defines allowed literal string states.
4. **Intersections**: `Person & ToMerge & ToMerge2` combines multiple object types.

## Expected Output
```text
User Alice has ID: usr_12345
Person 1 lives at 123 Main St with salary 123450
Fulfill order
Product prod-99: Price $99.99, Stock 250
```

## Common Mistakes & Anti-Patterns
- Expecting type aliases to support declaration merging like interfaces.
