(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('chalk'), require('clear'), require('figlet'), require('inquirer'), require('readline'), require('@babel/runtime/regenerator'), require('@babel/runtime/helpers/asyncToGenerator'), require('fs'), require('path')) :
    typeof define === 'function' && define.amd ? define(['chalk', 'clear', 'figlet', 'inquirer', 'readline', '@babel/runtime/regenerator', '@babel/runtime/helpers/asyncToGenerator', 'fs', 'path'], factory) :
    (global = global || self, factory(global.chalk, global.clear, global.figlet, global.inquirer, global.readline, global._regeneratorRuntime, global._asyncToGenerator, global.fs, global.path));
}(this, function (chalk, clear, figlet, inquirer, readline, _regeneratorRuntime, _asyncToGenerator, fs, path) { 'use strict';

    chalk = chalk && chalk.hasOwnProperty('default') ? chalk['default'] : chalk;
    clear = clear && clear.hasOwnProperty('default') ? clear['default'] : clear;
    figlet = figlet && figlet.hasOwnProperty('default') ? figlet['default'] : figlet;
    inquirer = inquirer && inquirer.hasOwnProperty('default') ? inquirer['default'] : inquirer;
    readline = readline && readline.hasOwnProperty('default') ? readline['default'] : readline;
    _regeneratorRuntime = _regeneratorRuntime && _regeneratorRuntime.hasOwnProperty('default') ? _regeneratorRuntime['default'] : _regeneratorRuntime;
    _asyncToGenerator = _asyncToGenerator && _asyncToGenerator.hasOwnProperty('default') ? _asyncToGenerator['default'] : _asyncToGenerator;
    fs = fs && fs.hasOwnProperty('default') ? fs['default'] : fs;
    path = path && path.hasOwnProperty('default') ? path['default'] : path;

    var CONF_FILE_NAME = 'duckwidard.config';
    var CONF_FILE_EXTENSION = '.json';

    var checkInit =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var question, answers;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (fs.exists(CONF_FILE_NAME + CONF_FILE_EXTENSION)) {
                  _context.next = 9;
                  break;
                }

                question = {
                  name: 'srcDirectory',
                  message: 'Src directory?',
                  default: 'src'
                };
                _context.next = 4;
                return inquirer.prompt(question);

              case 4:
                answers = _context.sent;
                console.log(answers);
                fs.writeFile(CONF_FILE_NAME + CONF_FILE_EXTENSION, JSON.stringify(answers), function (err) {
                  if (err) {
                    console.log('There has been an error saving your configuration data.');
                    console.log(err.message);
                    return;
                  }

                  console.log('Configuration saved successfully.');
                  return Promise.resolve();
                });
                _context.next = 10;
                break;

              case 9:
                return _context.abrupt("return", Promise.resolve());

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function checkInit() {
        return _ref.apply(this, arguments);
      };
    }();

    clear();
    console.log(chalk.green.dim(figlet.textSync('Duck wizard', {
      horizontalLayout: 'full'
    })));
    checkInit().then(function () {
      var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: chalk.black.bgYellow(' $ DW $ ') + ' > '
      });
      rl.prompt();
      rl.on('line', function (line) {
        switch (line.trim()) {
          case 'hello':
            console.log('world!');
            break;

          case 'exit':
            rl.close();
            break;

          default:
            console.log("Say what? I might have heard '".concat(line.trim(), "'"));
            break;
        }

        rl.prompt();
      }).on('close', function () {
        console.log('Have a great day!');
        process.exit(0);
      });
    });

}));
