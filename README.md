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
console.log(rand);
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

# Thanks✨