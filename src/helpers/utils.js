let idValue = 0;

export function id() {
  return idValue++;
}

export function idFor(prefix) {
  let current = 0;
  return function() {
    return prefix + '' + current++;
  };
}
