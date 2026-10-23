# Module 29: Classes and Constructors

## What the Topic Is
Class property declarations, default initializers, parameter properties shorthand (`public readonly id: string`), and strict property initialization rules.

## Why It Matters
TypeScript adds static type safety to object-oriented programming in JavaScript, enforcing strict initialization and visibility rules.

## Complete Code Example
```typescript
// TypeScript Learning Example: Classes and Constructors
// This file demonstrates class property declarations, default initializers, parameter properties shorthand,
// and strict property initialization rules.

export {};

// 1. Standard Class Property Declaration and Constructor Assignment
// In TypeScript, class properties must be declared in the body before being assigned in the constructor.
class UserAccount {
    id: string;
    name: string;
    email?: string;
    createdAt: Date = new Date(); // Default field initializer

    constructor(id: string, name: string, email?: string) {
        this.id = id;
        this.name = name;
        if (email) {
            this.email = email;
        }
    }

    getDetails(): string {
        return `User ${this.name} (${this.id}) - Email: ${this.email ?? "Not provided"}`;
    }
}

const user1 = new UserAccount("u1", "Unknown User");
const user2 = new UserAccount("u2", "Johnny Doe", "johnny@gmail.com");

console.log(user1.getDetails());
console.log(user2.getDetails());

// 2. Parameter Properties Shorthand
// TypeScript provides a convenient shorthand called "parameter properties"
// which automatically declares and initializes class properties from constructor parameters.
class ProductItem {
    constructor(
        public readonly id: string,
        public title: string,
        public price: number,
        private secretCode?: string
    ) {}

    displayInfo(): string {
        return `Product: ${this.title} - $${this.price} (ID: ${this.id})`;
    }
}

const item = new ProductItem("prod_101", "TypeScript Handbook", 39.99, "SEC_999");
console.log(item.displayInfo());
// item.id = "prod_999"; // Error: Cannot assign to 'id' because it is a read-only property

// 3. Common Pitfalls / Anti-patterns (Demonstrated via comments)
/*
// Bad Example 1: Uninitialized property without type annotation or initializer
class BadExample {
    a: string; // Error: Property 'a' has no initializer and is not definitely assigned in the constructor.
    constructor() {}
}

// Bad Example 2: Missing property declaration in class body
class AlsoBadExample {
    constructor() {
        this.a = "test"; // Error: Property 'a' does not exist on type 'AlsoBadExample'.
    }
}
*/
```

## How the Code Works Line by Line
1. **Property Declarations**: Properties must be declared in the class body under strict mode.
2. **Parameter Properties**: `constructor(public title: string)` automatically declares and assigns instance properties.
3. **Strict Initialization**: Prevents unassigned properties from crashing at runtime.

## Expected Output
```text
User Unknown User (u1) - Email: Not provided
User Johnny Doe (u2) - Email: johnny@gmail.com
Product: TypeScript Handbook - $39.99 (ID: prod_101)
```

## Common Mistakes & Anti-Patterns
- Forgetting to declare class properties in the body before assigning them in the constructor.
