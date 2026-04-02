# Day 10 

## Deep Theory

# 1) Putting JS Fundamentals Together

JavaScript fundamentals work together to control how code runs from start to finish.

When a JavaScript program starts, an **execution context** is created. This context manages how variables, functions, and code blocks are handled in memory and execution.

### 1. Memory Creation Phase
Before code executes, JavaScript first scans the code and allocates memory for variables and functions.

- Variables declared with `var` are initialized with `undefined`
- `let` and `const` stay in the **temporal dead zone**
- Function declarations are stored completely in memory

This is the reason **hoisting** happens.

### 2. Code Execution Phase
After memory allocation, JavaScript starts executing code line by line.

During this phase:
- values are assigned to variables
- functions are called
- expressions are evaluated
- output is generated

### 3. Scope and Scope Chain
Scope defines where variables can be accessed.

Types of scope:
- Global scope
- Function scope
- Block scope

If a variable is not found in the current scope, JavaScript checks the outer scope. This process is called the **scope chain**.

### 4. Closures
A closure happens when an inner function remembers variables from its outer function even after the outer function has finished execution.

Closures are commonly used in:
- data hiding
- counters
- callbacks
- event handlers

### 5. Objects and Arrays
Objects store data in key-value pairs.

Arrays store ordered collections of values.

Both are reference types, which means copying them creates a shared reference unless a deep copy is made.

### 6. Functions as First-Class Citizens
In JavaScript, functions can be:
- stored in variables
- passed as arguments
- returned from another function

This makes JavaScript powerful for callbacks and higher-order functions.

### 7. Asynchronous Behavior
JavaScript is single-threaded but can handle asynchronous tasks using:
- callbacks
- promises
- async/await

The **event loop** manages async operations and moves completed tasks from the callback queue to the call stack.

### 8. Putting Everything Together
When writing real projects, all fundamentals work together.

For example:
- scope controls variable access
- closures preserve data
- objects manage structured data
- functions handle logic
- async code manages API calls
- execution context controls flow

Understanding these fundamentals helps in writing clean, optimized, and bug-free JavaScript applications.

# 2) Architecting a Pure JavaScript Application

Architecting a pure JavaScript application means organizing the application in a clean, scalable, and maintainable way without using any external framework.

A well-structured JavaScript application should follow a clear flow:

### 1. Structure Separation
Keep each layer separate:
- **HTML** → defines the page structure
- **CSS** → handles styling and layout
- **JavaScript** → manages logic and interactivity

This makes the code easy to read and maintain.

### 2. Modular Approach
Break the application into small reusable parts such as:
- utility functions
- event handlers
- API functions
- DOM update functions

Each function should have **one specific responsibility**.

### 3. DOM Management
Use JavaScript to interact with page elements:
- select elements
- update content
- create dynamic components
- remove or hide elements

Efficient DOM handling improves performance.

### 4. Event-Driven Design
Applications respond to user actions like:
- button clicks
- form submission
- keyboard input
- page load events

This is handled using **event listeners**.

### 5. State Management
Maintain the current data of the application in variables, objects, or arrays.

Example:
- logged-in user
- cart items
- selected filters
- fetched API data

Proper state management keeps UI and data in sync.

### 6. Reusable and Clean Logic
Write reusable functions to avoid code duplication and keep logic simple.

This helps in debugging and future updates.

A good JavaScript architecture makes the application easier to scale, test, and manage in real-world projects.


# 3) Optimizing Loops, Rendering, and Data Flow

Optimizing loops, rendering, and data flow is important for building fast and efficient JavaScript applications.

### 1. Loop Optimization
Loops should be written in a way that reduces unnecessary iterations and repeated calculations.

- Use the right loop method such as `for`, `for...of`, `map`, or `forEach` based on the use case.
- Avoid calculations inside loops that can be done once outside.
- Minimize nested loops when possible to improve performance.
- Use `break` and `continue` to stop or skip unnecessary iterations.

Efficient loops reduce execution time, especially with large datasets.

### 2. Rendering Optimization
Rendering means updating the UI or DOM elements.

Frequent DOM updates can slow down the application, so it is better to:
- update multiple elements together
- avoid repeated DOM selection inside loops
- store element references in variables
- use `document.createDocumentFragment()` for multiple inserts
- update only the changed part of the UI

This improves page performance and user experience.

### 3. Data Flow Management
Data flow refers to how data moves through the application.

A clean data flow should follow:
- get data
- process data
- update state
- render UI

Keeping a clear flow helps in debugging and maintaining the application.

Proper optimization of loops, rendering, and data flow makes the application faster, cleaner, and more scalable.

# 4) LocalStorage / SessionStorage Patterns

`localStorage` and `sessionStorage` are used in JavaScript to store data in the browser as key-value pairs.

### 1. LocalStorage
`localStorage` stores data permanently until it is manually removed by the user or through code.

Common patterns:
- saving user preferences
- storing theme mode (dark/light)
- saving form data
- caching API responses
- storing login state (non-sensitive)

Data remains available even after closing and reopening the browser.

### 2. SessionStorage
`sessionStorage` stores data only for the current browser tab or session.

Common patterns:
- temporary form progress
- one-time session data
- page navigation state
- OTP or verification step data

Data is cleared when the tab or browser is closed.

### 3. Data Handling Pattern
Since both store only strings, objects and arrays should be converted using:

- `JSON.stringify()` → before storing
- `JSON.parse()` → after retrieving

This helps manage structured data properly.

