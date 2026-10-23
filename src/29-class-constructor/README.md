# Module 29: Classes and Constructors in TypeScript

## Learning Objective
Master TypeScript classes, constructors, field initializers, parameter property shorthands, and strict property initialization rules.

## Target Audience
Developers building object-oriented architectures, services, or domain models in TypeScript.

## Prerequisites
- Completion of [Module 28: The Awaited Utility Type](../28-utils-awaited/README.md).

---

## Explanation in Simple Language
TypeScript extends JavaScript classes with static typing and visibility modifiers:
- **Field Declarations**: Properties must be declared on the class body with their types.
- **Strict Initialization**: Under strict mode, TypeScript ensures every non-optional property is initialized either in the constructor or via a default field initializer.
- **Parameter Properties**: A shorthand syntax (`constructor(public id: string, private secret: string)`) that automatically declares and assigns class properties directly from constructor parameters.

---

## Key Concepts & Rules
1. **Field Initializers**: `createdAt: Date = new Date()`
2. **Parameter Properties**: Eliminates boilerplate assignment (`this.name = name`).
3. **Strict Property Initialization**: Prevents uninitialized properties from causing runtime `undefined` errors.

---

## Quick-Reference Code Examples
```typescript
class User {
    createdAt: Date = new Date();

    constructor(public id: string, public name: string, public email?: string) {}
}

const user = new User("1", "Alice");
```

---

## Common Mistakes
- Forgetting to declare class fields in the body before assigning them in the constructor (which throws a TS compile error under strict mode).
- Trying to access `private` properties outside the class body.

---

## Practice Exercises
1. Create a class `Product` using parameter properties for `id`, `title`, and `price`.
2. Add a private property `discountCode` and a public method that calculates final price.
