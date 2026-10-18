// TypeScript Learning Example: Interfaces
// This file demonstrates how to define object shapes, extend interfaces, implement classes, and merge declarations using `interface`.

export {};

// 1. Basic Interface Definition
// Interfaces are another way to define object shapes, very similar to type aliases (`type`).
interface User {
    id: string;
    name: string;
    email?: string; // Optional property
    readonly createdAt: Date; // Readonly property
}

const alice: User = {
    id: "u-1",
    name: "Alice Smith",
    email: "alice@example.com",
    createdAt: new Date()
};

console.log(`User: ${alice.name} (${alice.email})`);

// 2. Extending Interfaces (`extends`)
// Unlike type aliases (which use intersection `&`), interfaces can extend other interfaces cleanly.
interface Admin extends User {
    permissions: string[];
    superAdminLevel: number;
}

const adminUser: Admin = {
    id: "a-1",
    name: "Bob Admin",
    createdAt: new Date(),
    permissions: ["read", "write", "delete"],
    superAdminLevel: 5
};

console.log(`Admin ${adminUser.name} has level ${adminUser.superAdminLevel} access.`);

// 3. Declaration Merging (Unique to Interfaces)
// If you define two interfaces with the same name in the same scope, TypeScript automatically merges them!
interface Settings {
    theme: "light" | "dark";
}

interface Settings {
    debugMode: boolean;
}

// The merged Settings interface now requires BOTH theme and debugMode
const appSettings: Settings = {
    theme: "dark",
    debugMode: true
};

console.log(`Settings -> Theme: ${appSettings.theme}, Debug: ${appSettings.debugMode}`);

// 4. Implementing Interfaces in Classes
// Classes can implement interfaces to guarantee they adhere to a specific shape.
interface Logger {
    log(message: string): void;
    error(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`[INFO]: ${message}`);
    }

    error(message: string): void {
        console.error(`[ERROR]: ${message}`);
    }
}

const logger = new ConsoleLogger();
logger.log("Application started successfully.");
logger.error("Database connection timeout.");