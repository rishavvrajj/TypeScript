# Module 30: Class Access Modifiers and Encapsulation

## Learning Objective
Master TypeScript access modifiers (`public`, `private`, `protected`, `readonly`) and ECMAScript private fields (`#`) to enforce encapsulation, data hiding, and object safety.

## Target Audience
Developers building robust, encapsulated object-oriented architectures and domain models in TypeScript.

## Prerequisites
- Completion of [Module 29: Classes and Constructors](../29-class-constructor/README.md).

---

## Explanation in Simple Language
Encapsulation is the practice of hiding internal implementation details and exposing only a clean public interface:
- **`public`**: The default modifier. Members can be accessed from anywhere.
- **`private`**: Members can only be accessed inside the class where they are defined (enforced at compile-time by TypeScript).
- **`#private` (ECMAScript Private Fields)**: Enforced at runtime by JavaScript engines, offering true private encapsulation.
- **`protected`**: Members can be accessed inside the class and by any subclasses (child classes), but not from outside instances.
- **`readonly`**: Prevents property modification after the constructor finishes executing.

---

## Key Concepts & Rules
1. **Compile-time vs Runtime Privacy**: TypeScript's `private` is a compile-time check (compiled away to normal JS properties), whereas `#field` is true runtime privacy.
2. **Subclass Inheritance**: `protected` allows child classes to access parent properties while blocking external access.

---

## Quick-Reference Code Examples
```typescript
class BankAccount {
    public owner: string;
    private balance: number = 0;
    #pin: number = 1234; // Runtime private

    constructor(owner: string) {
        this.owner = owner;
    }
}
```

---

## Common Mistakes
- Relying solely on TypeScript's `private` modifier for highly sensitive data when compiled to plain JS (where private properties can still be accessed if type-checking is bypassed). Use `#private` for true runtime privacy.

---

## Practice Exercises
1. Create a `Vehicle` base class with a `protected speed` property, and a `Car` subclass that modifies speed.
2. Implement a `UserAccount` class with a `#password` private field and a method to verify it.
