// chain.js

/**
 * chains multiple of the same function calls together using callbacks
 * @param {object} error
 * @param {int} index (starts with -1)
 * @param {function} function to use. Must take arguments in form ({arguments}, callback)
 * @param {array} array of arguments to pass to func
 * @param {function} final callback
 **/
let chain = (err, i, func, args, callback) => {
  // check if previous command succeeded
  if (err) return callback(err);
  // move onto next function, if there is one
  i++;
  if (!args[i]) return callback();
  // call next function
  func(args[i], err => chain(err, i, func, args, callback));
};

module.exports = chain;
