// TypeScript Learning Example: Special and Top/Bottom Types
// This file demonstrates TypeScript's special types: any, unknown, void, never, null, and undefined.

export {};

// 1. The 'any' type: Opts out of type checking entirely.
// Use with extreme caution! It defeats the purpose of TypeScript.
const flexibleData: any = JSON.parse('{"x": 42}');
// This compiles without error, but can crash at runtime if properties don't exist:
// flexibleData.nonExistentMethod();

// 2. The 'unknown' type: The type-safe counterpart to 'any'.
// You can assign anything to 'unknown', but you must perform type narrowing before using it.
let safeValue: unknown = "Hello, unknown!";

// safeValue.toUpperCase(); // Error: Object is of type 'unknown'.

// Type narrowing with 'unknown':
if (typeof safeValue === "string") {
    console.log(safeValue.toUpperCase()); // Safe! TypeScript knows it's a string here.
}

// 3. The 'void' type: Represents the absence of having any type, commonly used as the return type of functions that do not return a value.
function logMessage(message: string): void {
    console.log(`[LOG]: ${message}`);
    // return undefined; // Valid in void functions
}

logMessage("Learning TypeScript special types!");

// 4. The 'never' type: Represents values that never occur.
// Used for functions that throw an error or contain an infinite loop.
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

// Exhaustiveness checking with 'never':
type Status = "success" | "error";

function handleStatus(status: Status): string {
    switch (status) {
        case "success":
            return "Operation succeeded!";
        case "error":
            return "Operation failed!";
        default:
            // TypeScript ensures all cases are handled. If a new status is added, this causes a compile error.
            const exhaustiveCheck: never = status;
            return exhaustiveCheck;
    }
}

console.log(handleStatus("success"));

// 5. Strict Null Checks (null and undefined)
// In strict mode, null and undefined are distinct types and cannot be assigned to other types
// unless explicitly included via union types.
let optionalTitle: string | undefined = undefined;
optionalTitle = "Advanced TypeScript";

console.log(`Optional Title: ${optionalTitle}`);
