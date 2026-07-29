# Browser Runtime

## Definition

The browser runtime is the complete environment in which client-side JavaScript runs. It combines the JavaScript engine with browser features such as the DOM, Web APIs, queues, and the Event Loop.

## Why do we need it?

The JavaScript engine can execute JavaScript, but it cannot provide a web page, timers, network requests, or user events by itself. The browser runtime supplies these features and coordinates asynchronous work without blocking the Call Stack.

## Flow / Diagram

```text
Browser Runtime
│
├── JavaScript Engine
│   ├── Memory Heap
│   └── Call Stack
│
├── Web APIs
│   ├── Timers
│   ├── Network Requests
│   └── DOM Events
│
├── Task Queues
│   ├── Callback Queue
│   └── Microtask Queue
│
└── Event Loop
    └── Coordinates queues and the Call Stack
```

## Important Points

- The browser runtime is larger than the JavaScript engine.
- The Call Stack executes JavaScript one task at a time.
- Browser Web APIs handle supported work outside the Call Stack.
- Completed asynchronous work schedules callbacks in a suitable queue.
- The Event Loop decides when queued work can return to the Call Stack.
- Browsers and server runtimes such as Node.js provide different environments.

## Interview Answer

The browser runtime is the environment that allows JavaScript to operate inside a web browser. It contains the JavaScript engine, Call Stack, memory, Web APIs, task queues, and Event Loop. The engine executes JavaScript, while browser APIs handle features such as timers, network requests, and DOM events. Completed asynchronous operations place work into queues. The Event Loop coordinates when that queued work can execute.

## Easy Analogy

Think of a restaurant. The chef is the JavaScript engine, the kitchen counter is the Call Stack, and other staff handle deliveries, timers, and customer requests. The complete restaurant is the browser runtime.

## One Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 0);

console.log("End");
```

## Output & Reason

```text
Start
End
Timer finished
```

The JavaScript engine executes the two synchronous logs first. The browser handles the timer and schedules its callback. That callback runs only after the current synchronous task has completed.
