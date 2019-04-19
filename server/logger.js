// require('log-timestamp');

const clc = require('cli-color');

const mapping = {
  log: clc.blue,
  warn: clc.yellow,
  error: clc.red
};

['log', 'warn', 'error'].forEach(function (method) {
  const oldMethod = console[method].bind(console);
  console[method] = function (...args) {
    oldMethod.apply(
      console,
      [mapping[method](new Date().toISOString())]
        .concat(args)
    );
  };
});

module.export = console;

