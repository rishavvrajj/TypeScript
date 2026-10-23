// TypeScript Learning Example: Generic Constraints and `keyof` Operator
// This file demonstrates how to constrain generic type parameters using `extends` and how to use
// the `keyof` operator combined with indexed access types (`T[K]`) for type-safe property access.

export {};

// 1. Generic Constraints (`extends`)
// Constraining a generic type parameter `<T>` ensures that `T` has specific properties or structure.
// Here, `T` must extend an object shape that contains a `.length` property.
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(getLength("hello world"));          // string has length
console.log(getLength([1, 2, 3, 4, 5]));        // array has length
console.log(getLength({ length: 42, note: "ok" })); // object with length property
// getLength(1234); // Error: number does not have a length property

// 2. The `keyof` Operator and Indexed Access Types (`T[K]`)
// `keyof T` produces a union of literal keys of type `T`.
// `T[K]` looks up the type associated with key `K` on type `T`.
type UserProfile = {
    id: string;
    name: string;
    age?: number;
};

// This function extracts a specific property value from an object in a 100% type-safe manner.
function extractProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user: UserProfile = {
    id: "usr_001",
    name: "Alice Smith",
    age: 28,
};

const userId = extractProperty(user, "id");     // Type is string
const userAge = extractProperty(user, "age");   // Type is number | undefined
// extractProperty(user, "address"); // Error: Argument of type '"address"' is not assignable to parameter of type 'keyof UserProfile'

console.log(`User ID: ${userId}, Age: ${userAge}`);

// 3. Extracting Property Values from Arrays of Objects
// Combining generic constraints, `keyof`, and arrays to map property columns.
function pluckProperty<T, K extends keyof T>(items: T[], key: K): Array<T[K]> {
    return items.map(item => item[key]);
}

const users: UserProfile[] = [
    { id: "1", name: "Alice", age: 25 },
    { id: "2", name: "Bob" }, // age is optional
    { id: "3", name: "Charlie", age: 30 },
];

const allIds = pluckProperty(users, "id");     // string[]
const allAges = pluckProperty(users, "age");   // (number | undefined)[]

console.log("All IDs:", allIds);
console.log("All Ages:", allAges);