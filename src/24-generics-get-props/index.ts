// TypeScript Learning Example: Generic Property Accessors and Mutators
// This file demonstrates how to build type-safe getters, setters, and immutable property updaters
// using generic type parameters `<T, K extends keyof T>` and indexed access types `T[K]`.

export {};

// 1. Defining the Domain Type
type UserAccount = {
    id: string;
    name: string;
    phone?: number;
    email?: string;
    isActive: boolean;
};

// 2. Generic Property Getter (`getProp`)
// The getter accepts any object `obj` of type `T` and a key `K` that must exist on `T`.
// The return type is dynamically inferred as `T[K]`.
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user: UserAccount = {
    id: "usr_101",
    name: "Sangam Mukherjee",
    isActive: true,
};

const userId = getProp(user, "id");         // Inferred as string
const userName = getProp(user, "name");     // Inferred as string
const userPhone = getProp(user, "phone");   // Inferred as number | undefined
const userActive = getProp(user, "isActive"); // Inferred as boolean

console.log(`User ID: ${userId}, Name: ${userName}, Active: ${userActive}, Phone: ${userPhone ?? "N/A"}`);

// 3. Generic Property Setter / Mutator (`setProp`)
// The setter accepts `newVal` strictly typed as `T[K]`.
// If you attempt to assign a string to a number property, TypeScript catches it at compile time.
function setProp<T, K extends keyof T>(obj: T, key: K, newVal: T[K]): void {
    obj[key] = newVal;
}

// Valid updates (types strictly match T[K])
setProp(user, "name", "John Doe");
setProp(user, "phone", 1234567890);
setProp(user, "email", "john@example.com");

console.log("Updated user:", user);

// Type Safety Checks (Uncommenting these will trigger compile-time errors):
// setProp(user, "phone", "not-a-number"); // Error: Argument of type 'string' is not assignable to parameter of type 'number | undefined'
// setProp(user, "nonExistentKey", 123);    // Error: Argument of type '"nonExistentKey"' is not assignable to parameter of type 'keyof UserAccount'

// 4. Immutable Property Updater (`updatePropImmutable`)
// In modern functional and React-oriented architectures, mutation is often avoided.
// This function returns a new copy of the object with the specified property updated.
function updatePropImmutable<T extends object, K extends keyof T>(obj: T, key: K, newVal: T[K]): T {
    return {
        ...obj,
        [key]: newVal,
    };
}

const updatedUser = updatePropImmutable(user, "name", "Jane Doe");
console.log("Original User Name:", user.name);        // "John Doe"
console.log("Immutable Copied User Name:", updatedUser.name); // "Jane Doe"