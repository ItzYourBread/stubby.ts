![](images/stubbyts.png)

[![CodeQL](https://github.com/NotRealArif/stubby.ts/actions/workflows/codeql.yml/badge.svg)](https://github.com/NotRealArif/stubby.ts/actions/workflows/codeql.yml)
[![Repo Dependents](https://badgen.net/github/dependents-repo/NotRealArif/stubby.ts)](https://github.com/NotRealArif/stubby.ts/network/dependents)
[![npm version](https://img.shields.io/npm/v/stubby.ts.svg)](https://www.npmjs.com/package/stubby.ts)
[![NPM Download](https://img.shields.io/npm/dm/stubby.ts.svg?style=flat)](https://www.npmjs.com/package/stubby.ts)

# stubby.ts
It's powerful and full laziness module for JavaScript and TypeScript.

# Docs
<details>
<summary>RandomNumber(min, max)</summary>
  
```ts
import { Random } from "stubby.ts";

// Generate a random number between 0 and 100
const randomNumber = Random(0, 100);
console.log(randomNumber); // Output: a random number between 0 and 100

// Generate a random number between -10 and 10
const negativeRandomNumber = Random(-10, 10);
console.log(negativeRandomNumber); // Output: a random number between -10 and 10

// Generate a random string from an array
const fruits = ["Apple", "Banana", "Cherry", "Grape", "Kiwi"];
const randomFruit = Random(fruits);
console.log(randomFruit); // Output: a random fruit from the array

// Generate a random object from an array of objects
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const randomPerson = Random(people);
console.log(randomPerson); // Output: a random person object from the array
```
</details>

<details>
<summary>SmallNumber(count, digits)</summary>
  
```ts
import { SmallNumber } from "stubby.ts";

let num = "143";
let digits = num.length + 1;

console.log(SmallNumber(num, digits)) // it wil print superscript numbers like ⁰¹²³⁴⁵⁶⁷⁸⁹
```
</details>

<details>
<summary>SystemInfo()</summary>
	
```ts
import { SystemInfo } from "stubby.ts";

console.log(SystemInfo().memory());
console.log(SystemInfo().memoryUsage());
console.log(SystemInfo().cpuUsage());
console.log(SystemInfo().cores());
console.log(SystemInfo().cpuBrand());
console.log(SystemInfo().uptime());
```
</details>

<details>
<summary>Replace(string, replacements)</summary>

```ts
import { Replace } from 'stubby.ts';

const paragraph = `
  %boyname% loves %girlname%, but %girlname% doesn't know yet.
`;

const replacements = {
  '%boyname%': 'Arif',
  '%girlname%': 'Afrin'
};

const loveStory = Replace(paragraph, replacements);

console.log(loveStory);
```
</details>

# Thanks✨
Have a great day!😊
