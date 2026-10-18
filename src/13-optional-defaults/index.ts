// TypeScript Learning Example: Optional and Default Parameters
// This file demonstrates how to handle optional parameters (`?`) and default parameter values (`=`).

export { };

// 1. Optional Parameters (`?`)
// An optional parameter can be provided or omitted. When omitted, its value is `undefined`.
function greetOptional(name?: string): string {
    // We must check if `name` is undefined before calling string methods on it
    const displayName = name ? name.toUpperCase() : "GUEST";
    return `Hello, ${displayName}!`;
}

console.log(greetOptional("rishav")); // Hello, RISHAV!
console.log(greetOptional());         // Hello, GUEST!

// 2. Default Parameters (`=`)
// A default parameter automatically assigns a fallback value if the argument is omitted or `undefined`.
function greetDefault(name: string = "Guest"): string {
    return `Hello, ${name.toUpperCase()}!`;
}

console.log(greetDefault("rishav")); // Hello, RISHAV!
console.log(greetDefault());         // Hello, GUEST!

// 3. Combining Multiple Optional and Default Parameters
function connect(host: string, port: number = 3000, secure: boolean = false): string {
    return `Connecting to ${host} on port ${port} [Secure: ${secure}]`;
}

console.log(connect("localhost"));                     // Connecting to localhost on port 3000 [Secure: false]
console.log(connect("api.example.com", 8080, true));   // Connecting to api.example.com on port 8080 [Secure: true]

// 4. Optional Properties in Object Types
// Optional properties (`?`) can also be defined on object types and interfaces.
type ServerConfig = {
    host: string;
    port?: number; // Optional property
    timeout?: number; // Optional property
};

function startServer(config: ServerConfig): void {
    // Using the nullish coalescing operator (??) to provide fallback values
    const port = config.port ?? 8080;
    const timeout = config.timeout ?? 30;

    console.log(`Starting server on ${config.host}:${port} with timeout ${timeout}s`);
}

startServer({ host: "127.0.0.1" });
startServer({ host: "0.0.0.0", port: 5000, timeout: 60 });