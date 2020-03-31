export function clone(obj) {
  return JSON.parse(
    JSON.stringify(
      obj,
    ),
  );
}

export function safeCall(context, func, args) {
  let current = context;
  func.forEach((next) => {
    if (current && current[next]) {
      current = current[next];
    }
  });
  return current.apply(this, args);
}

export function combineWhiteSpace(str) {
  return str.trim().replace(/ +(?= )/g, '');
}
