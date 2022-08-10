const assert = require("assert");

let arr = [1, [2, [3]], 4];

const flatten = (arr) => {};

const expected = [1, 2, 3, 4];
assert.deepEqual(flatten(arr), expected);

const expected2 = [1, 2, 3, 4, 5, 6];
assert.deepEqual(flatten([1, 2, 3, [4, [5, [6]]]]), expected2);
