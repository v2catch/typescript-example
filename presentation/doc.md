# Just do it.

## Stuff about javascript

When Eich created JavaScript in 1995, he created it for Netscape Navigator and it quickly became known as LiveScript. In another quirk of JavaScript history, the team changed the name to JavaScript to reflect Netscape's support of Java within its browser.

### What is javascript

JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

### There are great things about javascript

-   You have freedom to do whatever you want.
-   You technically don't need any bundlers or transpilers
-   Easy to learn

### What's wrong with javascript

-   It's easily abused.
-   You have freedom to do whatever you want.
-   Dynamic and weakly typed can lead more run time exceptions or errors


### Why Typescript

-   TypeScript supports JS libraries
-   It is a superset of Javascript
-   It is optionally typed scripting language
-   TypeScript Code can be converted into plain JavaScript Code
-   Better code structuring and object-oriented programming techniques
-   Allows better development time tool support
-   It can extend the language beyond the standard decorators, async/await


## What is TypeScript?

In short, TypeScript is a superset of JavaScript that has optional typing and compiles to plain JavaScript.

It's really just javascript with types.
### There are a few different ways to define things.

#### Interfaces
Defining shapes of objects with multiple types
```js
interface OtherChannel {
  title:                 string;
}

//declaration merging
interface OtherChannel {
  description:           string;
}

//extending
interface Channel extends OtherChannel {
  description:           string;
}

const [channel, getChannel] = useState<Channel>()
//or
const foo = getStuff<Channel>();
```

#### Types
Types are not a new type defintion just an Alias to an existing type or types
```ts
type Second = number|string;
let time: Second = 42;
```

## JS Examples
### Weird world of JS

```js

[] + [] → "" // Empty string? These are arrays!
[] + {} → [object object]
{} + [] → 0 // Why isn't the operation commutative???
{} + {} → NaN // ???

```

```js
const arr = [];
arr.length → 0
arr[3] → "undefined" // No array bounds exception???
arr[3] = "hi";
arr.length → 4 // 4??? Only one element has been added!
arr["3"] → "hi" // Apparently "3" is coerced into a number
```

```js
const i = 1;
i = i + ""; // Oops!
i + 1 → "11"
```
