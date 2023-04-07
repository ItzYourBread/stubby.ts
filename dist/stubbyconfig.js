"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var chalk = require("chalk");
// Create stubbyconfig.json file if it does not exist
var configFilePath = path.join(process.cwd(), "stubbyconfig.json");
if (!fs.existsSync(configFilePath)) {
    fs.writeFileSync(configFilePath, JSON.stringify({
        showConsoleMessage: true
    }, null, 2));
}
var config = JSON.parse(fs.readFileSync(configFilePath, "utf8"));
// Console message
if (config.showConsoleMessage) {
    console.log(chalk.yellowBright("\n    \u250F\u2501\u2501\u2501\u2513\u254B\u254B\u254B\u254B\u254B\u254B\u254B\u254B\u250F\u2513\n    \u2503\u250F\u2501\u2501\u251B\u254B\u254B\u254B\u254B\u254B\u254B\u254B\u250F\u251B\u2517\u2513\n    \u2503\u2517\u2501\u2501\u2533\u2501\u2501\u2533\u2501\u2501\u2533\u2501\u253B\u2513\u250F\u254B\u2501\u2501\u2533\u2501\u2533\u2501\u2533\u2501\u2501\u2533\u2501\u2513\n    \u2503\u250F\u2501\u2501\u252B\u250F\u2513\u2503\u250F\u2513\u2503\u2501\u2501\u252B\u2503\u2503\u250F\u2513\u2503\u250F\u253B\u2513\u2503\u2501\u2501\u252B\u250F\u251B\n    \u2503\u2517\u2501\u2501\u252B\u2517\u251B\u2503\u250F\u2513\u2523\u2501\u2501\u2503\u2517\u252B\u250F\u2513\u2503\u2517\u2513\u2503\u2523\u2501\u2501\u2503\u2503\n    \u2517\u2501\u2501\u2501\u253B\u2501\u2501\u253B\u251B\u2517\u253B\u2501\u2501\u253B\u2501\u253B\u251B\u2517\u253B\u2501\u251B\u2517\u253B\u2501\u2501\u253B\u251B\n    Welcome to Stubby.ts!\n  "));
}
