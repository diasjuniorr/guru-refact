const assert = require("assert");

let arr = [1, [2, [3]], 4];

const flatten = (arr) => {
  let hasArray = false;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...arr[i]);
      hasArray = true;
      continue;
    }

    result.push(arr[i]);
  }

  if (hasArray) {
    return flatten(result);
  }

  return result;
};

const expected = [1, 2, 3, 4];
assert.deepEqual(flatten(arr), expected);

const expected2 = [1, 2, 3, 4, 5, 6];
assert.deepEqual(flatten([1, 2, 3, [4, [5, [6]]]]), expected2);
