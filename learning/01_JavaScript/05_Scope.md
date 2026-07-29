# JavaScript Scope

## What is Scope?

Scope decides where a variable or function can be accessed in a program. It protects values from being used in places where they do not belong and allows different parts of a program to use the same variable name safely.

## Types of Scope

### Global Scope

A value declared outside every function and block belongs to the global scope. It can usually be accessed from anywhere in the script.

```javascript
const applicationName = "Knowledge Platform";

function showApplicationName() {
    console.log(applicationName);
}
```

### Function Scope

Variables declared inside a function are local to that function. Code outside the function cannot access them.

```javascript
function createUser() {
    const userName = "Anu";
    console.log(userName);
}

createUser();
// console.log(userName); // ReferenceError
```

`var` is function-scoped. `let` and `const` are also limited by a function when declared inside it.

### Block Scope

A block is code enclosed by curly braces, such as an `if` statement or a loop. Variables declared with `let` and `const` are block-scoped, while `var` is not.

```javascript
if (true) {
    let status = "learning";
    const topic = "scope";
    var message = "JavaScript";
}

// console.log(status); // ReferenceError
// console.log(topic);  // ReferenceError
console.log(message);   // JavaScript
```

## Scope Lookup

When JavaScript needs a variable, it first searches the current scope. If the variable is not there, it continues through the parent scopes until it reaches the global scope.

```text
Current Scope
      ↓
Parent Scope
      ↓
Global Scope
      ↓
ReferenceError (if not found)
```

JavaScript searches outward only. An outer scope cannot search inside one of its child scopes.

## Variable Shadowing

A variable in an inner scope can use the same name as a variable in an outer scope. The inner variable temporarily hides, or shadows, the outer one.

```javascript
const role = "global user";

function showRole() {
    const role = "administrator";
    console.log(role); // administrator
}

showRole();
console.log(role); // global user
```

## Key Points

- Scope controls the visibility of variables and functions.
- Global values are available broadly and should be used carefully.
- Function-local values cannot be accessed from outside their function.
- `let` and `const` respect block scope.
- `var` respects function scope but not block scope.
- Variable lookup moves from the current scope toward outer scopes.
- A missing variable produces a `ReferenceError`.

## Summary

Scope defines the area in which a declaration is visible. JavaScript checks the current scope first and then searches its parent scopes. Using `let` and `const` helps keep values inside the smallest scope that needs them.
