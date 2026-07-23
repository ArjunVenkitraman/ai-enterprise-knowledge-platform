# JavaScript Engine

## What is a JavaScript Engine?

A JavaScript engine is a program that reads JavaScript source code, understands it, and runs it. Your code is just text. The engine is the piece of software that turns that text into instructions the computer can actually execute.

Every place that runs JavaScript has an engine inside it. The browser has one. Node.js has one. Without an engine, a `.js` file is just a document that nothing can run.

## Why is it needed?

A computer's processor does not understand JavaScript directly. It understands low-level machine instructions. The engine sits in the middle and does the translation:

- It reads the source code as plain text.
- It checks whether the code follows JavaScript's rules.
- It converts the code into a form the machine can run.
- It executes the code and manages memory while it runs.

Without an engine, there is no bridge between the JavaScript you write and the machine that runs it.

## Popular JavaScript Engines

Different platforms ship different engines, but they all do the same job.

- **V8** — built by Google. Powers Google Chrome and Node.js. This is the most widely used engine.
- **SpiderMonkey** — built by Mozilla. Powers Firefox. It was the very first JavaScript engine.
- **JavaScriptCore** — built by Apple. Powers Safari. Also called Nitro.

Learning how one engine works helps you understand all of them, because they follow the same core stages.

## How the Engine Processes Code

When the engine receives your source code, it moves through a series of stages. The first two stages turn your text into a structure the engine can reason about.

```text
Source Code (plain text)
        │
        ▼
   ┌─────────┐
   │  Lexer  │   breaks text into tokens
   └─────────┘
        │
        ▼
   ┌─────────┐
   │ Parser  │   builds a tree from tokens
   └─────────┘
        │
        ▼
   Abstract Syntax Tree (AST)
        │
        ▼
   Execution (run the code)
```

## Lexer (Tokenizer)

### Purpose

The lexer, also called the tokenizer, is the first stage. Its job is to read the source code character by character and group those characters into small meaningful pieces called **tokens**.

A token is the smallest unit of code that still has meaning. Keywords, variable names, numbers, operators, and punctuation each become a token. The lexer does not understand what the code *means* yet — it only splits the text into labelled pieces.

### Example

Given this line:

```javascript
let x = 10;
```

The lexer produces a stream of tokens like this:

```text
[ keyword: "let" ]
[ identifier: "x" ]
[ operator: "=" ]
[ number: "10" ]
[ punctuation: ";" ]
```

The whitespace between them is discarded. What comes out is a clean list of tokens ready for the next stage.

## Parser

### Purpose

The parser is the second stage. It takes the flat list of tokens from the lexer and arranges them into a tree structure that shows how the pieces relate to each other. This tree is called the **Abstract Syntax Tree (AST)**.

While the lexer only groups characters, the parser understands grammar. It checks that the tokens appear in an order that JavaScript allows. If they do, it builds the tree. If they do not, it reports an error.

### Example

Given the tokens for:

```javascript
let x = 10;
```

The parser builds a tree that describes the statement:

```text
VariableDeclaration
├── kind: "let"
└── Declarator
    ├── name: "x"
    └── value: 10
```

This tree tells the engine exactly what to do: declare a variable named `x` and give it the value `10`. Later stages of the engine work from this tree, not from the raw text.

## Syntax Error

### What is it?

A syntax error is an error the engine reports when your code breaks JavaScript's grammar rules. The tokens are in an order that the parser cannot turn into a valid tree, so it stops and refuses to run the code.

### When does it occur?

A syntax error occurs during the **parsing stage**, before any code runs. Because the engine checks the grammar first, a single syntax error can stop the whole file from executing — even the correct lines.

Common causes:

- A missing closing bracket, brace, or parenthesis.
- A missing or misplaced quotation mark.
- Using a reserved keyword in the wrong place.
- Writing an expression the grammar does not allow.

Example:

```javascript
let x = ;   // SyntaxError: nothing on the right side of =
```

The parser reaches the `;` and finds no value to assign, so it reports a syntax error and the program never runs.

## Automatic Semicolon Insertion (ASI)

One sentence for now: **ASI is a feature of the JavaScript engine that automatically adds semicolons in certain places where you left them out, so some code runs even without them — but it can occasionally guess wrong, which is why relying on it is risky.** (We will study this in depth later.)

## Real Life Analogy

Think of reading a sentence in a book.

First your eyes break the line into individual words — that is the lexer producing tokens. Then your brain arranges those words by grammar to understand who did what to whom — that is the parser building a tree. If the words are in an order that makes no grammatical sense, you get confused and stop — that is a syntax error.

## Key Points

- A JavaScript engine turns your source code into instructions the machine can run.
- V8, SpiderMonkey, and JavaScriptCore are the major engines, but they share the same stages.
- The lexer breaks source text into tokens.
- The parser arranges tokens into an Abstract Syntax Tree and checks grammar.
- A syntax error is raised during parsing when the grammar is broken, and it stops the code from running.
- ASI lets the engine insert missing semicolons, which is convenient but not always safe.

## Questions I Had

- Is the engine the same thing as the browser, or a part of it?
- What is the difference between a lexer and a parser?
- Why does one syntax error stop the entire file from running?
- If ASI adds semicolons for me, why do people still write them by hand?
- What happens to the AST after the parser builds it?

## Summary

A JavaScript engine is the software that runs your JavaScript. It first uses a lexer to break the source text into tokens, then a parser to arrange those tokens into an Abstract Syntax Tree while checking the grammar. If the grammar is broken, the engine reports a syntax error before running anything. Once a valid tree exists, the engine executes the code. ASI is a helper that fills in missing semicolons, which is handy but occasionally makes the wrong guess.

## Interview Questions

Try answering these without searching.

What is a JavaScript engine, and name one real engine?
What does the lexer do, and what is a token?
What does the parser produce from the tokens?
At which stage does a syntax error occur, and why does it stop the whole file?
In one sentence, what is Automatic Semicolon Insertion?

Don't worry if you can't answer perfectly today—we'll revisit these after a few more lessons.

## Interesting JavaScript Behavior

### Automatic Semicolon Insertion (ASI)

Example:

```javascript
function test() {
    return
    {
        value: 10
    }
}
```

**Output:** `undefined`

**Reason:** JavaScript inserts a semicolon immediately after `return` because the object starts on the next line.

At first glance this looks like it returns an object with `value: 10`. It does not. It returns `undefined`.

The reason is ASI. When the engine sees `return` at the end of a line, its rules tell it to insert a semicolon right after the `return` keyword. So the engine actually reads the code like this:

```javascript
function test() {
    return;          // ASI added a semicolon here
    {
        value: 10
    }
}
```

Now the meaning is completely different:

- `return;` ends the function immediately and returns `undefined`.
- The block below it is never reached.

This is one of the most famous JavaScript gotchas. The fix is to keep the opening brace on the **same line** as `return`, so ASI has no reason to break the statement:

```javascript
function test() {
    return {
        value: 10
    };
}
```

**Lesson:** with `return`, `break`, `continue`, and `throw`, never put a line break right after the keyword. ASI will silently insert a semicolon and change what your code does.

### Return Statement Stops Execution (Unreachable Code)

Example:

```javascript
function demo() {
    console.log("A");
    return 100;
    console.log("B");
}
console.log(demo());
```

**Output:**

```text
A
100
```

**Reason:** As soon as `return 100;` runs, the function terminates and returns control to the caller. `console.log("B")` is never reached — it is **unreachable code**. So `demo()` produces the value `100`, and only `A` was printed from inside the function before the return.

A clean interview answer: *"The return statement immediately terminates the current function execution and returns control to the caller, so any statements after it are unreachable and never execute."*

## New Terms Learned

- JavaScript Engine
- V8
- SpiderMonkey
- JavaScriptCore
- Lexer
- Token
- Parser

## One-Line Definitions

(Write each in your own words.)

- JavaScript Engine —
- V8 —
- SpiderMonkey —
- JavaScriptCore —
- Lexer —
- Token —
- Parser —

## Mistakes I Made Today

1. I predicted `test()` would return the object `{ value: a }`, so I said the output was `10`. The real output is `undefined`, because ASI inserts a semicolon right after `return`.
2. For the `demo()` example I said the output was `A B 100`. I assumed every line inside the function runs. The real output is `A 100`, because `return` immediately stops the function and `console.log("B")` is unreachable code.
3. In both cases I answered based on how I *read* the code as a human, not on how the JavaScript engine *executes* it line by line.

## What I Learned

1. ASI can silently insert a semicolon after `return` when the value starts on the next line, changing `return { ... }` into `return;`, so the function returns `undefined`.
2. A `return` statement terminates the function immediately and returns control to the caller. Any statement written after it is unreachable code and never runs.
3. To get the right answer, simulate execution the way the engine does: track each execution context on the call stack (LIFO), and remember the innermost function context is destroyed first.

## Interview Keywords

- JavaScript Engine
- Execution Context
- Lexer
- Parser
- Token
- Automatic Semicolon Insertion
- Unreachable Code
- Return Statement

Now

You're already reasoning through:

✅ Execution Context
✅ Function Calls
✅ JavaScript Engine
✅ Parser
✅ Lexer
✅ Syntax Errors
✅ Automatic Semicolon Insertion
✅ return behavior

This is a solid foundation.