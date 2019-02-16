const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

module.exports = {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },

    directoryExists: filePath => {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (err) {
            return false;
        }
    },
    checkInit: () => {
        if (!fs.exists("cliconf.json")) {
            const question = {
                name: "srcDirectory",
                message: "Src directory?",
                default: "src"
            };
            inquirer.prompt(question).then(answers => {
                console.log(answers);
                fs.writeFile("cliconf.json", JSON.stringify(answers), err => {
                    if (err) {
                        console.log("There has been an error saving your configuration data.");
                        console.log(err.message);
                        return;
                    }
                    console.log("Configuration saved successfully.");
                    return Promise.resolve();
                });
            });
        } else {
            return Promise.resolve();
        }
    }
};
