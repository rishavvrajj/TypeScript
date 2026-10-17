// TypeScript Learning Example: Const Assertions and Derived Types (`as const`)
// This file demonstrates how to use `as const` to create immutable literal types and derive unions from arrays and objects.

export {};

// 1. Const Assertions on Arrays (`as const`)
// Without `as const`, TypeScript infers `string[]` (mutable array of strings).
// With `as const`, TypeScript infers a readonly tuple with exact literal types: `readonly ["admin", "user", "operator"]`.
const ROLES = ["admin", "user", "operator"] as const;

// 2. Deriving a Union Type from an Array
// `(typeof ROLES)[number]` indexes into the tuple type using number,
// resulting in the union type: "admin" | "user" | "operator"
type Role = (typeof ROLES)[number];

// 3. Using the Derived Union Type in Functions
function setRole(r: Role): void {
    console.log(`Setting user role to: ${r}`);
}

setRole("admin"); // Valid
setRole("user");  // Valid
// setRole("superuser"); // Error: Argument of type '"superuser"' is not assignable to parameter of type 'Role'.

// 4. Const Assertions on Objects
// `as const` recursively makes all properties readonly and narrows values to literal types.
const PERMISSIONS = {
    READ: "read",
    WRITE: "write",
    EXECUTE: "execute"
} as const;

// Deriving a union type from object values
type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
// Resulting union: "read" | "write" | "execute"

function checkPermission(permission: Permission): void {
    console.log(`Checking permission: ${permission}`);
}

checkPermission(PERMISSIONS.READ); // Valid
// checkPermission("delete"); // Error: Argument of type '"delete"' is not assignable to parameter of type 'Permission'.

console.log(`Available Roles: ${ROLES.join(", ")}`);