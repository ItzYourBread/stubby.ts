![](images/stubbyjs.png)

[![CodeQL](https://github.com/NotRealArif/stubby.js/actions/workflows/codeql.yml/badge.svg)](https://github.com/NotRealArif/stubby.js/actions/workflows/codeql.yml)
[![Repo Dependents](https://badgen.net/github/dependents-repo/NotRealArif/stubby.js)](https://github.com/NotRealArif/printly.js/network/dependents)
[![npm version](https://img.shields.io/npm/v/stubby.js.svg)](https://www.npmjs.com/package/stubby.js)
[![NPM Download](https://img.shields.io/npm/dm/stubby.js.svg?style=flat)](https://www.npmjs.com/package/stubby.js)

# stubby.js
It's powerful and full laziness module for JavaScript and TypeScript.

# Docs
<details>
<summary>RandomNumber(min, max)</summary>
  
```ts
import { RandomNumber } from "stubby.js";

let rand = RandomNumber(10, 100);
console.log(rand);
```
</details>

<details>
<summary>RandomArray(object)</summary>
  
```ts
import { RandomArray } from "stubby.js";

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
console.log(randomFruits);

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
console.log(randomNames.name);
```
</details>