### Weird world of JS

![Types](https://imgs.xkcd.com/comics/types.png)

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

\
\
\
\
\
\
\
\
\
\
\
\
\

# Just do it.

\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\

## What is TypeScript?

In short, TypeScript is a superset of JavaScript that has optional typing and compiles to plain JavaScript.

It's really just javascript with with extra steps.
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\

### Why Typescript

-   TypeScript points out errors at compile time.
-   Better tools in editors, tooltips, info and autocomplete
-   Helps with refactoring
-   TypeScript supports JS libraries
-   It is a superset of Javascript
-   It is optionally typed scripting language
-   TypeScript Code can be converted into plain JavaScript Code
-   Better code structuring and object-oriented programming techniques
-   Allows better development time tool support
-   It makes you feel like a wizard.

\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
#Actually Looking at some Types
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\

### There are a few different ways to define things.

#### Type Inference

```js
let x = 3;
//x : number

let x = [0, 1, null];
//x: (number | null)[]

let zoo = [new Rhino(), new Elephant(), new Snake()];
//zoo: (Rhino | Elephant | Snake)[]
```

#### Type assertions

Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually, this will happen when you know the type of some entity could be more specific than its current type.

```js
let x: number | null = 3;
//x : (number|null)

let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```

\
\
\
\
\
\
\
\
\
\
\
\
\

#### Contextual Typing

```js
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- OK
    console.log(mouseEvent.kangaroo); //<- Error!
};

window.onscroll = function (uiEvent) {
    console.log(uiEvent.button); //<- Error!
};

document.body.onclick = function (mouseEvent) {
    console.log(mouseEvent.taget.innerHTML); //<- Error!
};
```

\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\

#### Interfaces

Defining shapes of objects with optional or required typed properties or methods

```js
interface OtherChannel {
  title: string;
}

//declaration merging
interface OtherChannel {
  description: string;
  transform(desc:string):string
}

//extending
interface Channel extends OtherChannel {
  description2?: string;
}

class SlackChannel implements Channel {
  ...
}

const [channel, setChannel] = useState<Channel>()
//or
const foo: Channel = getStuff();
```

\
\
\
\
\
\
\
\
\
\
\

#### Types

Types are not a new Type defintion just an Alias to an existing type or types

```ts
type Second = number | string;
let time: Second = 42;
```

```ts
type OtherChannel = {
    description: string;
};
```

\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\

### Actually using types

```js
const getFirstItem = <T>(arg: T[]): T => {
    return arg[0];
};

const channels: Channel[] = [
    {
        title: 'blah',
        description: 'blah',
        description2: 'blah',
        transform: (desc: string) => desc + 'a',
    },
    {
        title: 'blah',
        description: 'blah',
        description2: 'blah',
        transform: (desc: string) => desc + 'a',
    },
];

const channel = getFirstItem < Channel > channels;
```

#### React in Javascript

```js
import React, { useState } from 'react';

//initial is not typed anything could passed into this component
function Counter({ initial = 0 }) {
    const [clicks, setClicks] = useState(initial);

    return (
        <>
            <p>Clicks: {clicks}</p>
            <button onClick={() => setClicks(clicks + 1)}>+</button>
            <button onClick={() => setClicks(clicks - 1)}>-</button>
        </>
    );
}
```

And in Typescript

```js
// import useState next to FunctionComponent
import React, { FunctionComponent as FC, useState } from 'react';

// our components props accept a number for the initial value
const Counter: FC<{ initial?: number }> = ({ initial = 0 }) => {
    // since we pass a number here, clicks is going to be a number.
    // setClicks is a function that accepts either a number or a function returning
    // a number
    const [clicks, setClicks] = useState(initial);
    return (
        <>
            <p>Clicks: {clicks}</p>
            <button onClick={() => setClicks(clicks + 1)}>+</button>
            <button onClick={() => setClicks(clicks - 1)}>-</button>
        </>
    );
};
```

\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\

#### What If something Doesn't have types and is written in javascript

OH NO, NPM left-pad doesn't have a type defined!! (it does actually)

1. Make a `./types` directory
2. Add `./types` to tsconfig
3. Add `./types/left-pad/index.d.ts`

```js
declare function leftPad(str: string|number, len: number, ch?: string|number): string;

declare namespace leftPad { }

export = leftPad;
```

Or just

```
declare module 'left-pad'
```

You can declare the module with no types and type `any` will be assumed.
If you are feeling super sleazy you can add the above to `/global.d.ts`

\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\

#### Issues with Typescript

-   Extra configuration you have to learn
-   Extra Syntax Theres a lot of it if you wanna use it all.
-   There is no one set of rules you can be as strict as you want to be
-   Some tooling or applications implement different levels of strictness... i.e storybook
-   eslint does not seem to integrate with tsconfig so changes to tsconfig.json are not reflected in your editor warnings
-   Requires compilers or transpilers

\
\
\
\
\
\
\

#### Other things

Deno
