# Browser Web APIs

## Definition

Browser Web APIs are interfaces provided by the browser, not by the JavaScript language itself. They let JavaScript interact with web pages and request browser-managed features such as timers, networking, storage, and events.

## Why do we need it?

JavaScript needs browser APIs to perform work beyond language operations. These APIs allow applications to update the DOM, make HTTP requests, store data, respond to users, and start asynchronous tasks without keeping the Call Stack busy.

## Flow / Diagram

```text
JavaScript calls a Web API
          ↓
Browser handles the operation
          ↓
Operation completes
          ↓
Callback or continuation is queued
          ↓
Event Loop allows it to run
          ↓
JavaScript executes it on the Call Stack
```

## Important Points

- Web APIs are supplied by the browser environment.
- Common examples include `setTimeout`, `fetch`, DOM APIs, and event listeners.
- JavaScript starts an operation, but the browser manages the supported external work.
- A completed asynchronous operation schedules later JavaScript work.
- Different APIs use different queues and completion mechanisms.
- Web API availability can differ across browsers and runtime environments.

## Interview Answer

Browser Web APIs are capabilities exposed by the browser to JavaScript. They include timers, network requests, DOM manipulation, events, and browser storage. These features are not part of the core JavaScript language. JavaScript calls an API, and the browser manages the requested operation. When asynchronous work is ready, its callback or continuation is queued so JavaScript can execute it later.

## Easy Analogy

Web APIs are like specialist departments in a company. The main employee delegates networking, timing, storage, or user-event work to the appropriate department and continues with the current assignment.

## One Example

```javascript
console.log("Requesting timer");

setTimeout(() => {
    console.log("Timer callback");
}, 1000);

console.log("Timer requested");
```

## Output & Reason

```text
Requesting timer
Timer requested
Timer callback
```

`setTimeout` asks the browser to manage a timer. JavaScript continues executing instead of waiting. After at least the requested delay, the callback becomes eligible to run when the Call Stack is available.
