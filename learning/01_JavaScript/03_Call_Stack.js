// ============================================================
// 03_Call_Stack.js
// Run with:  node 03_Call_Stack.js
// Comment out sections you don't want to run.
// ============================================================


// ------------------------------------------------------------
// Example 1: Basic nested calls (A -> B -> C)
// Predict the output BEFORE running.
// ------------------------------------------------------------
function A() {
    console.log("A");
    B();
    console.log("A End");
}

function B() {
    console.log("B");
    C();
    console.log("B End");
}

function C() {
    console.log("C");
}

A();

// Expected output:
// A
// B
// C
// B End
// A End
//
// Call stack while C() runs:  C -> B -> A -> Global
// Pushes = 4 (Global, A, B, C)   Pops = 4   Contexts = 4


// ------------------------------------------------------------
// Example 2: x -> y -> z with surrounding logs
// ------------------------------------------------------------
function x() {
    console.log("X Start");
    y();
    console.log("X End");
}

function y() {
    console.log("Y Start");
    z();
    console.log("Y End");
}

function z() {
    console.log("Z");
}

console.log("Program Start");
x();
console.log("Program End");

// Expected output:
// Program Start
// X Start
// Y Start
// Z
// Y End
// X End
// Program End
//
// Call stack while z() runs:  z -> y -> x -> Global


// ------------------------------------------------------------
// Example 3: return stops execution (unreachable code)
// ------------------------------------------------------------
function demo() {
    console.log("A");
    return 100;
    console.log("B"); // unreachable - never runs
}
console.log(demo());

// Expected output:
// A
// 100


// ------------------------------------------------------------
// Example 4: Stack Overflow (DANGER)
// Leave this COMMENTED OUT. Uncomment only to see the crash,
// then comment it back. It throws:
//   RangeError: Maximum call stack size exceeded
// ------------------------------------------------------------
// function test() {
//     test();
// }
// test();
