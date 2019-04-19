// require('log-timestamp');

const clc = require('cli-color');
const db = require('./db.js');

const mapping = {
  log: clc.blue,
  warn: clc.yellow,
  error: clc.red
};

['log', 'warn', 'error'].forEach(function (method) {
  const oldMethod = console[method].bind(console);
  console[method] = function (...args) {
    const message = [mapping[method](new Date().toISOString())]
      .concat(args);

    oldMethod.apply(
      console,
      message
    );
    if (method === 'log') {
      db.log(message.join(' '));
    }
  };
});

module.export = console;

