/**
 * sets a value to a key in an object of the condition is true
 *
 * does not mutate
 *
 * @param {Object} obj plain object
 * @param {string} key
 * @param {*} value
 * @param {boolean} cond
 * @returns {*}
 */
export function cnd(obj, key, value, cond) {
  if (cond) {
    return {
      ...obj,
      [key]: value,
    }
  }
  return obj;
}
