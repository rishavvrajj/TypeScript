// TypeScript Learning Example: Runtime Type Checking & Type Narrowing
// This file demonstrates how TypeScript performs control flow analysis and type narrowing using `typeof`, `Array.isArray`, and `instanceof`.

export {};

// 1. Narrowing Primitive Types using `typeof`
// TypeScript tracks runtime checks (like `typeof x === 'string'`) to narrow `unknown` or union types into specific types.
function describeTypeof(x: unknown): string | number | boolean | bigint | symbol | undefined | (() => void) | null {
    if (typeof x === 'string') {
        // TypeScript narrows `x` to `string` inside this block
        return 'string';
    }

    if (typeof x === 'number') {
        // TypeScript narrows `x` to `number`
        return 10;
    }

    if (typeof x === 'boolean') {
        // TypeScript narrows `x` to `boolean`
        return true;
    }

    if (typeof x === 'bigint') {
        // TypeScript narrows `x` to `bigint`
        return 'BigInt';
    }

    if (typeof x === 'symbol') {
        // TypeScript narrows `x` to `symbol`
        return 'symbol';
    }

    if (typeof x === 'undefined') {
        // TypeScript narrows `x` to `undefined`
        return 'undefined';
    }

    if (typeof x === 'function') {
        // TypeScript narrows `x` to `Function`
        return () => {};
    }

    if (x === null) {
        // TypeScript narrows `x` to `null`
        return null;
    }

    // Fallback for objects or other types
    console.log(`type of array : ${typeof([1,3,4])}`);
    
    return 'object';
}

console.log(
    describeTypeof('Hi'),
    describeTypeof(23),
    describeTypeof(true),
    describeTypeof(10n),
    describeTypeof(Symbol('sangam')),
    describeTypeof(undefined),
    describeTypeof(() => {}),
    describeTypeof(null),
    describeTypeof({}),
);

// 2. Narrowing Complex Types using `Array.isArray` and `instanceof`
// Note: For non-primitives and objects, JavaScript's `typeof` operator returns `"object"`.
// To narrow arrays and class instances, TypeScript supports built-in narrowing utilities like `Array.isArray()` and `instanceof`.
function info(z: unknown): unknown {
    if (Array.isArray(z)) {
        // TypeScript narrows `z` to an array type
        return z;
    }

    if (z instanceof Date) {
        // TypeScript narrows `z` to `Date`
        return new Date();
    }

    if (z instanceof Error) {
        // TypeScript narrows `z` to `Error`
        return new Error(`${z}`);
    }

    return 'other';
}

console.log(
    info([1, 2, 3, 4, 5]),
    info(new Date()),
    info(new Error('oops! Error occured')),
);
