# Module 16: Interfaces

## Learning Objective
Master TypeScript interfaces (`interface`) for defining object shapes, extending types, implementing classes, and leveraging declaration merging.

## Target Audience
Developers building object-oriented and extensible architectures in TypeScript.

## Prerequisites
- Completion of [Module 15: Function Return Types](../15-return-type/README.md).

---

## ExplanationIn Simple Language
An **Interface** is a powerful way to define the "shape" of an object in TypeScript. While very similar to type aliases (`type`), interfaces support **inheritance** (`extends`), **class implementation** (`implements`), and **declaration merging** (automatically combining multiple declarations with the same name).

---

## Key Concepts & Rules
1. **Interface Definition**: `interface User { id: string; name: string; }`
2. **Extending Interfaces**: `interface Admin extends User { permissions: string[]; }`
3. **Declaration Merging**: Defining two interfaces with the same name merges their properties (unique to interfaces).
4. **Implementing in Classes**: `class ConsoleLogger implements Logger { ... }`

---

## Quick-Reference Code Examples
```typescript
interface Animal {
    name: string;
}

interface Dog extends Animal {
    bark(): void;
}

const myDog: Dog = {
    name: "Rex",
    bark() { console.log("Woof!"); }
};
```

---

## Common Mistakes
- Using intersection (`&`) where interface extension (`extends`) is cleaner and produces better error messages.

---

## Practice Exercises
1. Define an `Employee` interface extending a base `Person` interface.
2. Create a class that implements a custom `Repository` interface.

---

## Course Conclusion
Congratulations on completing the TypeScript Essentials course!
