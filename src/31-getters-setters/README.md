# Module 31: Class Getters and Setters (Accessors)

## What the Topic Is
Using `get` and `set` accessors for data validation, computed properties, unit conversion, and read-only getters.

## Why It Matters
Accessors intercept reads and writes to object properties, allowing you to run validation logic or calculate computed properties on the fly.

## Complete Code Example
```typescript
// TypeScript Learning Example: Class Getters and Setters (Accessors)
// This file demonstrates how to use `get` and `set` accessors for data validation,
// computed properties, unit conversion, and read-only getters.

export {};

// 1. Encapsulated State with Validation & Computed Conversions
class Temperature {
    // Private backing field using ECMAScript private field `#c`
    #celsius = 0;

    constructor(initialCelsius: number) {
        // Calling setter to ensure validation runs during construction
        this.celsius = initialCelsius;
    }

    // Getter for Celsius
    get celsius(): number {
        return this.#celsius;
    }

    // Setter for Celsius with validation
    set celsius(value: number) {
        if (Number.isNaN(value)) {
            throw new Error('Invalid temperature: value is not a valid number.');
        }
        this.#celsius = value;
    }

    // Computed Getter for Fahrenheit
    get fahrenheit(): number {
        return (this.#celsius * 9) / 5 + 32;
    }

    // Setter for Fahrenheit that converts and updates internal Celsius storage
    set fahrenheit(f: number) {
        this.celsius = ((f - 32) * 5) / 9;
    }

    // Read-only computed getter for Kelvin (no setter defined -> read-only)
    get kelvin(): number {
        return this.#celsius + 273.15;
    }
}

const temp = new Temperature(25);

console.log(`Initial Celsius: ${temp.celsius}°C`);
console.log(`Initial Fahrenheit: ${temp.fahrenheit}°F`);
console.log(`Initial Kelvin: ${temp.kelvin}K`);

// Updating through setter
temp.fahrenheit = 212; // Boiling point of water
console.log(`After setting Fahrenheit to 212°F: Celsius is ${temp.celsius}°C`);

temp.celsius = 0; // Freezing point of water
console.log(`After setting Celsius to 0°C: Fahrenheit is ${temp.fahrenheit}°F`);

// temp.kelvin = 300; // Error: Cannot assign to 'kelvin' because it is a read-only property

// 2. Read-Only Getters with Full Name Example
class Person {
    constructor(public firstName: string, public lastName: string) {}

    // Computed read-only property
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person("Rishav", "Raj");
console.log(`Full Name: ${person.fullName}`);
```

## How the Code Works Line by Line
1. **Backing Fields**: Uses `#celsius` private field to store state.
2. **Validation Setters**: Validates input before updating state.
3. **Computed Getters**: Computes Fahrenheit and Kelvin on the fly.
4. **Read-Only Getters**: Omitting a setter makes properties read-only.

## Expected Output
```text
Initial Celsius: 25°C
Initial Fahrenheit: 77°F
Initial Kelvin: 298.15K
After setting Fahrenheit to 212°F: Celsius is 100°C
After setting Celsius to 0°C: Fahrenheit is 32°F
Full Name: Rishav Raj
```

## Common Mistakes & Anti-Patterns
- Recursively calling the setter inside itself (e.g., `set val(v) { this.val = v; }`), causing a stack overflow. Always store in a backing field like `#c` or `_c`.
- Calling a getter like a method (`obj.radius()` instead of `obj.radius`).
