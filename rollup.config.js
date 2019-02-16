var rollup = require("rollup");
var babel = require("rollup-plugin-babel");

module.exports = {
    input: "index.js",
    output: {
        file: "lib/duck-wizard.js",
        format: "umd"
    },
    plugins: [babel()]
};
