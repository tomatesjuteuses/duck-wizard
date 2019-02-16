(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    var chalk = require("chalk");

    var clear = require("clear");

    var figlet = require("figlet");

    var files = require("./src/files");

    var inquirer = require("inquirer");

    var readline = require("readline");

    clear();
    console.log(chalk.green.dim(figlet.textSync("Duck wizard", {
      horizontalLayout: "full"
    })));
    files.checkInit().then(function () {
      var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: chalk.black.bgYellow(" $ DW $ ") + " > "
      });
      rl.prompt();
      rl.on("line", function (line) {
        switch (line.trim()) {
          case "hello":
            console.log("world!");
            break;

          case "exit":
            rl.close();
            break;

          default:
            console.log("Say what? I might have heard '".concat(line.trim(), "'"));
            break;
        }

        rl.prompt();
      }).on("close", function () {
        console.log("Have a great day!");
        process.exit(0);
      });
    });

}));
