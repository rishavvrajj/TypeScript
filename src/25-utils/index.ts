// TypeScript Learning Example: Built-in Utility Types
// This file demonstrates how to use TypeScript's core built-in utility types:
// Partial<T>, Required<T>, Readonly<T>, Pick<T, K>, Omit<T, K>, and Record<K, V>.

export {};

type Address = {
    line1: string;
    city: string;
};

type User = {
    id: string;
    name: string;
    email?: string;
    address: Address;
};

// 1. Partial<T>
// Makes all properties of type `T` optional (`?`). Ideal for patch / update payloads.
type UserPatch = Partial<User>;

const patch1: UserPatch = {
    name: "Rishav",
};

const patch2: UserPatch = {
    address: { line1: "123 Main St", city: "Seattle" }
};

console.log("Partial patch created successfully");

// 2. Required<T>
// Makes all properties of type `T` required (removing any optional `?` modifiers).
type RequiredUser = Required<User>;

const completeUser: RequiredUser = {
    id: "usr_01",
    name: "Sangam",
    email: "sangam@example.com",
    address: { line1: "456 Market St", city: "San Francisco" }
};

console.log(`Required user email: ${completeUser.email}`);

// 3. Readonly<T>
// Makes all properties of type `T` immutable (read-only).
type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = {
    id: "usr_02",
    name: "Alice",
    address: { line1: "789 Pine St", city: "Portland" }
};

// readonlyUser.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
console.log(`Readonly user name: ${readonlyUser.name}`);

// 4. Pick<T, K>
// Constructs a type by picking the set of properties `K` from `T`.
type UserBasicInfo = Pick<User, "id" | "name">;

const basicInfo: UserBasicInfo = {
    id: "usr_03",
    name: "Charlie",
};

console.log(`Picked User - ID: ${basicInfo.id}, Name: ${basicInfo.name}`);

// 5. Omit<T, K>
// Constructs a type by picking all properties from `T` and then removing `K`.
type UserWithoutId = Omit<User, "id">;

const newUser: UserWithoutId = {
    name: "Diana",
    email: "diana@example.com",
    address: { line1: "321 Oak St", city: "Austin" }
};

console.log(`Omitted ID user name: ${newUser.name}`);

// 6. Record<K, V>
// Constructs an object type whose property keys are `K` and whose property values are `V`.
// Excellent for lookup tables and dictionaries.
type Role = "Admin" | "User" | "Editor";
type RoleDirectory = Record<Role, User>;

const directory: RoleDirectory = {
    Admin: { id: "u1", name: "Admin Boss", address: { line1: "HQ", city: "New York" } },
    User: { id: "u2", name: "Regular User", address: { line1: "Suburbs", city: "Denver" } },
    Editor: { id: "u3", name: "Content Editor", address: { line1: "Studio", city: "Chicago" } },
};

console.log(`Admin in directory: ${directory.Admin.name}`);