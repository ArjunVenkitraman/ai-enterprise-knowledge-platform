# JavaScript Execution Context

## What is an Execution Context?

An execution context is the environment JavaScript creates to understand and run a piece of code. It keeps track of variables, functions, the current scope, and the order in which statements should execute.

JavaScript creates a global execution context when a program starts. It also creates a new function execution context whenever a function is called.

## Why is it needed?

JavaScript needs an organized way to store data and execute instructions. The execution context provides that organization by determining:

- Which variables and functions are available
- Where their values are stored
- Which statement should run next
- What the current function can access

Without execution contexts, JavaScript could not reliably manage scopes, function calls, or variable values.

## Two Phases

Every execution context is processed in two main phases.

### Memory Creation Phase

Before running the code, JavaScript scans the declarations and reserves memory for them.

- Variables declared with `var` initially receive `undefined`.
- Variables declared with `let` and `const` are created but cannot be accessed before their declaration is evaluated. This period is called the temporal dead zone.
- Function declarations are stored with their complete function definitions.

### Execution Phase

JavaScript then runs the statements from top to bottom.

- Values are assigned to variables.
- Expressions are evaluated.
- Functions are called.
- Each function call creates a separate execution context.
- Completed function contexts are removed from the call stack.

## Real Life Analogy

Think of a chef preparing a recipe. Before cooking, the chef identifies the ingredients, tools, and instructions that will be needed. This preparation resembles the memory creation phase. The chef then follows the recipe step by step, which resembles the execution phase.

Calling a function is like asking another chef to complete a smaller recipe. That chef gets a separate workspace, finishes the task, and then returns control to the original chef.

## Example

```javascript
let a = 10;
let b = 20;

function add() {
    console.log(a + b);
}

add();
```

During the memory creation phase, JavaScript registers `a`, `b`, and the `add` function. The `let` variables exist but are not available until their declarations are executed.

During the execution phase, `10` is assigned to `a`, `20` is assigned to `b`, and `add()` is called. The call creates a function execution context. The function finds `a` and `b` in the outer global scope and prints `30`.

## Key Points

- JavaScript creates a global execution context when a script begins.
- A new function execution context is created for every function call.
- Each context goes through memory creation and execution phases.
- Execution contexts are managed through the call stack.
- Functions can access values from their outer scope through the scope chain.
- `let` and `const` cannot be used before their declarations are evaluated.

## Questions I Had

- What is the difference between global and function execution contexts?
- Why can a function use variables declared outside it?
- What happens to a function execution context after the function returns?
- How does the call stack handle nested function calls?
- Why do `var`, `let`, and `const` behave differently before declaration?

## Summary

An execution context is the workspace JavaScript uses to prepare and run code. JavaScript first allocates memory for declarations and then executes statements in order. The global script has its own context, and every function call receives another one. Together with the call stack and scope chain, execution contexts allow JavaScript to manage variables and function calls predictably.

## Interview Questions

Try answering these without searching.

What is an Execution Context?
How many phases are there in an Execution Context?
What happens during the Memory Creation Phase?
What happens during the Execution Phase?
Does every function create a new Execution Context? Why?

Don't worry if you can't answer perfectly today—we'll revisit these after a few more lessons.