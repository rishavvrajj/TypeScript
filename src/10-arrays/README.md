# Module 10: Arrays

## What the Topic Is
Typed arrays, union arrays (`(string | number)[]`), readonly arrays (`readonly number[]` / `ReadonlyArray<number>`), and typed array methods.

## Why It Matters
Enforcing array element types prevents runtime bugs caused by unintended data types being pushed into collections. Readonly arrays guarantee immutability in function arguments.

## Complete Code Example
```typescript
// TypeScript Learning Example: Arrays
// TypeScript extends JavaScript arrays with static type safety,
// preventing you from accidentally adding the wrong type of element.

export {};

// 1. Two Equivalent Syntaxes for Typed Arrays
// Both are identical — use whichever reads more naturally to you.
const scores: number[] = [10, 20, 30, 40];         // Preferred shorthand
const labels: Array<string> = ["a", "b", "c"];     // Generic syntax

// TypeScript guards array operations too:
// scores.push("hello"); // Error: Argument of type 'string' is not assignable to type 'number'.

// 2. Union Arrays — each element can be one of several types
const mixed: (string | number)[] = [1, "two", 3, "four"];
mixed.push(5);       // Valid
mixed.push("six");   // Valid
// mixed.push(true); // Error: Argument of type 'boolean' is not assignable to type 'string | number'.

// 3. Readonly Arrays — elements cannot be added, removed, or replaced
// Great for function parameters you want to guarantee won't be mutated.
const frozen: readonly number[] = [1, 2, 3, 4];
// frozen.push(5);   // Error: Property 'push' does not exist on type 'readonly number[]'.
// frozen[0] = 99;   // Error: Index signature in type 'readonly number[]' only permits reading.

// ReadonlyArray<T> is the generic equivalent — identical behaviour.
const frozenAlt: ReadonlyArray<number> = [1, 2, 3, 4];

// Read-only methods (that return new arrays) still work:
const doubled = frozen.map(n => n * 2);
const sliced  = frozen.slice(1, 3);
console.log(`Doubled: ${doubled}`);   // [2, 4, 6, 8]
console.log(`Sliced:  ${sliced}`);    // [2, 3]

// 4. Mutable vs Readonly in Practice
const mutable: number[] = [1, 2, 3, 4];
mutable[0] = 99;   // Valid — mutable arrays allow index assignment
mutable.pop();     // Valid — removes the last element
console.log(`After mutation: ${mutable}`);  // [99, 2, 3]

// A function that accepts a readonly array cannot accidentally mutate it.
// This is the recommended pattern for array parameters — accept the least permissive type.
function sum(nums: readonly number[]): number {
    let total = 0;
    for (const n of nums) total += n;
    return total;
}

// Both mutable and readonly arrays can be passed to a readonly parameter.
console.log(`Sum of mutable: ${sum(mutable)}`);
console.log(`Sum of frozen:  ${sum(frozen)}`);

// 5. Typed Array Methods
// TypeScript infers the return type of array methods automatically.
const prices: number[] = [29.99, 49.99, 9.99];

const expensive: number[]  = prices.filter(p => p > 20);       // number[]
const formatted: string[]  = prices.map(p => `$${p.toFixed(2)}`); // string[]
const total: number        = prices.reduce((acc, p) => acc + p, 0); // number

console.log(`Expensive: ${expensive}`);
console.log(`Formatted: ${formatted}`);
console.log(`Total:     $${total.toFixed(2)}`);
```

## How the Code Works Line by Line
1. **Typed Arrays**: `number[]` and `Array<string>` ensure elements match the declared type.
2. **Union Arrays**: `(string | number)[]` allows mixed primitives. Note the parentheses are required.
3. **Readonly Arrays**: `readonly number[]` blocks mutating methods like `push` and index assignment.
4. **Array Methods**: `map`, `filter`, and `reduce` are fully type-checked.

## Expected Output
```text
Doubled: 2,4,6,8
Sliced:  2,3
After mutation: 99,2,3
Sum of mutable: 104
Sum of frozen:  10
Expensive: 29.99,49.99
Formatted: $29.99,$49.99,$9.99
Total:     $89.97
```

## Common Mistakes & Anti-Patterns
- Writing `string | number[]` instead of `(string | number)[]`, which means either a single string or an array of numbers.
- Mutating arrays passed into functions when readonly arrays (`readonly T[]`) should be used.
