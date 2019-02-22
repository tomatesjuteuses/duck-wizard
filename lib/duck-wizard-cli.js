#!/usr/bin/env node
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var chalk = _interopDefault(require('chalk'));
var clear = _interopDefault(require('clear'));
var figlet = _interopDefault(require('figlet'));
var readline = _interopDefault(require('readline'));
var fs = _interopDefault(require('fs'));
require('path');
var inquirer = _interopDefault(require('inquirer'));
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));

var CONF_FILE_NAME = 'duckwidard.config';
var CONF_FILE_EXTENSION = '.json';

var checkInit =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    var questions, answers;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (fs.exists(CONF_FILE_NAME + CONF_FILE_EXTENSION)) {
              _context.next = 9;
              break;
            }

            questions = [{
              name: 'srcDirectory',
              message: 'Src directory?',
              default: 'src'
            }, {
              name: 'modulesDirectory',
              message: 'Modules directory?',
              default: 'modules'
            }];
            _context.next = 4;
            return inquirer.prompt(questions);

          case 4:
            answers = _context.sent;
            console.log(answers);
            fs.writeFile(CONF_FILE_NAME + CONF_FILE_EXTENSION, JSON.stringify(answers), writeEnd);
            _context.next = 11;
            break;

          case 9:
            console.log('Project already configured');
            return _context.abrupt("return", Promise.resolve());

          case 11:
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

var writeEnd = function writeEnd(err) {
  if (err) {
    console.log('There has been an error saving your configuration data.');
    console.log(err.message);
    return;
  }

  console.log('Configuration saved successfully.');
  return Promise.resolve();
};

var _Object$freeze;

var doModules = function doModules() {
  console.log('Sorry, this command is not available yet');
};

var doExit = function doExit(rl) {
  rl.close();
};

var CMD = Object.freeze({
  EXIT: 'exit',
  MODULE: 'module'
});
var exec = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, CMD.EXIT, doExit), _defineProperty(_Object$freeze, CMD.MODULE, doModules), _Object$freeze));

var launch =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    var rl;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(chalk.green.dim(figlet.textSync('Duck wizard', {
              horizontalLayout: 'full'
            })));
            _context.next = 3;
            return checkInit();

          case 3:
            rl = readline.createInterface({
              input: process.stdin,
              output: process.stdout,
              prompt: chalk.black.bgYellow(' $ DW $ ') + ' > '
            });
            rl.prompt();
            rl.on('line', function (line) {
              var command = exec[line.trim()];
              if (command) command(rl);else {
                console.log("Say what? I might have heard '".concat(line.trim(), "'"));
                console.log('Available commands: ' + Object.values(CMD).join(' | '));
              }
              rl.prompt();
            }).on('close', function () {
              console.log('Have a great day!');
              process.exit(0);
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function launch() {
    return _ref.apply(this, arguments);
  };
}();

clear();
launch();
