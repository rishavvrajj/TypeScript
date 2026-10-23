// TypeScript Learning Example: Class Access Modifiers and Encapsulation
// This file demonstrates public, private, protected, readonly modifiers, and ES2022 private fields (#).

export {};

// 1. Access Modifiers: `public`, `private`, and ES Private Fields (`#`)
class BankAccount {
    // `public` is the default; accessible anywhere
    public owner: string;

    // `private` is enforced by TypeScript at compile-time
    private balance = 0;

    // `#otp` is a true JavaScript runtime private field (ECMAScript private identifier)
    #otp = 123456;

    constructor(owner: string) {
        this.owner = owner;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }

    verifyOtp(code: number): boolean {
        return this.#otp === code; // Only accessible inside this class
    }
}

const acc = new BankAccount('Alice');
acc.deposit(50000);
console.log(`Account Balance: ${acc.getBalance()}`); // Fixed missing parentheses ()

// acc.balance; // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
// acc.#otp;    // Error: Property '#otp' is not accessible outside class 'BankAccount' because it has a private identifier.

// 2. `protected` Modifier and Inheritance
// `protected` allows members to be accessed within the class itself and any subclasses (derived classes).
class Animal {
    protected energy = 50;

    eat(amount: number): void {
        this.energy = Math.min(100, this.energy + amount);
        console.log(`Animal ate. Current energy: ${this.energy}`);
    }
}

class Dog extends Animal {
    run(): void {
        this.energy -= 15;
        console.log(`Dog ran. Energy dropped to: ${this.energy}`);
    }

    getStatus(): number {
        return this.energy; // Child class can access protected member `energy`
    }
}

const myDog = new Dog();
myDog.eat(20);
myDog.run();
console.log(`Dog final energy status: ${myDog.getStatus()}`);

// myDog.energy; // Error: Property 'energy' is protected and only accessible within class 'Animal' and its subclasses.
