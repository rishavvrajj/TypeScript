// TypeScript Learning Example: Primitive Types
// This file demonstrates TypeScript's primitive types: string, number, boolean, bigint, symbol, null, and undefined.

// 1. String: textual data, enclosed in single quotes, double quotes, or backticks (template literals)
let username: string = "TypeScript Learner";
let greeting: string = `Hello, ${username}!`;
console.log(greeting);

// 2. Number: both integer and floating-point numbers (TypeScript does not have a separate int type)
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xf00d; // Hexadecimal literal
console.log(`Age: ${age}, Price: ${price}`);

// 3. Boolean: true or false values
let isEnrolled: boolean = true;
let isCompleted: boolean = false;
console.log(`Enrolled: ${isEnrolled}`);

// 4. BigInt: for working with arbitrarily large integers (denoted by appending an 'n' to the integer literal)
const maxSafeInteger: bigint = 9007199254740991n;
const bigResult: bigint = maxSafeInteger * 2n;
console.log(`BigInt Result: ${bigResult}`);

// Note: You cannot mix number and bigint directly without explicit conversion
// const mixed = age + bigResult; // Error: Operator '+' cannot be applied to types 'number' and 'bigint'

// 5. Symbol: creates globally unique identifiers
const UNIQUE_ID: unique symbol = Symbol('id');
const userSym = {
    [UNIQUE_ID]: 12345
};
console.log(`Symbol property access works!`);

// 6. Null and Undefined: representing intentional absence of value and uninitialized variables
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// By default, null and undefined are subtypes of all other types (unless strictNullChecks is disabled,
// but in strict mode, they can only be assigned to themselves and 'any' or 'unknown').

// Utility function demonstrating primitive types in action
export function calculateDaysAlive(years: number): number {
    return years * 365;
}

console.log(`Days alive for 25 years: ${calculateDaysAlive(age)}`);