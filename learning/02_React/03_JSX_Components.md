# JSX & Components

## React

React is a JavaScript library used to build interactive user interfaces. It helps developers construct interfaces from small, reusable components.

---

## JSX

JSX is a syntax extension that allows HTML-like markup to be written inside JavaScript. It makes the structure of a component easier to understand.

---

## Babel

Babel is a JavaScript compiler that can transform JSX into regular JavaScript that browsers can process.

```text
JSX
 ↓
Babel
 ↓
JavaScript
 ↓
Browser
```

Modern React build tools handle this transformation automatically during development and production builds.

---

## Component

A React component is a reusable piece of a user interface. A function component is a JavaScript function that returns JSX describing what should appear on the screen.

```jsx
function Welcome() {
    return <h1>Welcome</h1>;
}
```

---

## Why Components?

- Reusable
- Easy to maintain
- Modular
- Better readability
- Easier to test

---

## Interview Answer

React applications are constructed from reusable components. A function component is a JavaScript function that returns JSX describing part of the user interface. JSX provides an HTML-like syntax inside JavaScript. A build tool transforms JSX into JavaScript before the browser executes it. Components improve modularity, reuse, readability, testing, and maintenance.

---

## Easy Analogy

A component is like a LEGO block 🧱. Each block has a specific purpose and can be reused in different places. A complete webpage is assembled by combining many small components.
