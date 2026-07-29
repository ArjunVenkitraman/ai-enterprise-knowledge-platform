# Callback Queue

## Definition

The Callback Queue, also called the task queue, stores ready callbacks for tasks such as completed timers and certain browser events. It normally follows first-in, first-out order.

## Why do we need it?

An asynchronous callback cannot interrupt JavaScript that is already running. The Callback Queue gives ready callbacks a place to wait until the current task finishes and the Call Stack becomes empty.

## Flow / Diagram

```text
Web API completes its work
             ↓
Callback enters Callback Queue
             ↓
Callback waits in FIFO order
             ↓
Event Loop checks the Call Stack
             ↓
Callback moves to the Call Stack
             ↓
JavaScript executes the callback
```

## Important Points

- The Callback Queue stores callbacks; it does not execute them.
- Tasks generally wait in first-in, first-out order.
- A callback cannot run while synchronous JavaScript occupies the Call Stack.
- The Event Loop coordinates when the next task can execute.
- Timer delays specify a minimum delay, not an exact execution time.
- Promise handlers use the Microtask Queue, which has different priority rules.

## Interview Answer

The Callback Queue is a FIFO task queue that holds callbacks ready for JavaScript execution. Timers and certain browser events can schedule callbacks in this queue after their browser-managed work is complete. The callbacks wait while the Call Stack is busy. Once the current task and higher-priority microtasks have finished, the Event Loop can select the next task. The JavaScript engine then executes that callback on the Call Stack.

## Easy Analogy

The Callback Queue is like a hospital waiting room. Patients are ready to be seen, but they wait until the doctor finishes the current appointment and calls the next person.

## One Example

```javascript
setTimeout(() => {
    console.log("First timer");
}, 0);

setTimeout(() => {
    console.log("Second timer");
}, 0);

console.log("Synchronous code");
```

## Output & Reason

```text
Synchronous code
First timer
Second timer
```

The synchronous log runs during the current task. Both timer callbacks are scheduled for later, and they normally enter the Callback Queue in registration order. They run only after the current JavaScript task finishes.
