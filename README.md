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
import { RandomNumber } from "stubby.ts";

let rand = RandomNumber(10, 100);
console.log(rand); // now it will take random numbers between 10 to 100 
```
</details>

<details>
<summary>RandomArray(object)</summary>
  
```ts
import { RandomArray } from "stubby.ts";


// first example.
let fruits = [
  "Apple",
  "Pineapple",
  "Orange",
  "Strawberry",
  "Mango",
  "Cherry"
];

let randomFruits = RandomArray(fruits);
console.log(randomFruits); // it will send the array value randmly 


// second example
let names = [
  {
    name: "Arif"
  },
  {
    name: "Afrin"
  }
];

let randomNames = RandomArray(names);
console.log(randomNames.name); // it will send the array json object value randomly
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
