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