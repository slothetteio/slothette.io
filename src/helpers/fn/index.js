/**
 * returns a function, that when called, calls the original function asynchronously
 *
 * @param fn
 * @returns {function(cb, ...[*])}
 */
export function makeAsyncCb(fn) {
  return function(cb, ...args) {
    setTimeout(() => {
      try {
        cb(null, fn(...args));
      } catch (err) {
        cb(err, null);
      }
    }, 0)
  }
}

/**
 * Returns a promise that calls the function asynchronously
 * @param fn
 * @returns {function(...[*]=): Promise<any>}
 */
export function makeAsyncP(fn) {
  return function(...args) {
    return new Promise((y, n) => {
      setTimeout(() => {
        try {
          y(fn(...args));
        } catch (err) {
          n(err);
        }
      }, 0);
    });
  }
}
