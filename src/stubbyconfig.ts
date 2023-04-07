import * as fs from "fs";
import * as path from "path";
import * as chalk from "chalk";

// Create stubbyconfig.json file if it does not exist
const configFilePath = path.join(process.cwd(), "stubbyconfig.json");
if (!fs.existsSync(configFilePath)) {
  fs.writeFileSync(
    configFilePath,
    JSON.stringify({
      showConsoleMessage: true
    }, null, 2)
  );
}

const config = JSON.parse(fs.readFileSync(configFilePath, "utf8"));

// Console message
if (config.showConsoleMessage) {
  console.log(chalk.yellowBright(`
    ┏━━━┓╋╋╋╋╋╋╋╋┏┓
    ┃┏━━┛╋╋╋╋╋╋╋┏┛┗┓
    ┃┗━━┳━━┳━━┳━┻┓┏╋━━┳━┳━┳━━┳━┓
    ┃┏━━┫┏┓┃┏┓┃━━┫┃┃┏┓┃┏┻┓┃━━┫┏┛
    ┃┗━━┫┗┛┃┏┓┣━━┃┗┫┏┓┃┗┓┃┣━━┃┃
    ┗━━━┻━━┻┛┗┻━━┻━┻┛┗┻━┛┗┻━━┻┛
    Welcome to Stubby.ts!
  `));
}
