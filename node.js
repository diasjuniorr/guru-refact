const assert = require("assert");

const Node = (operator, value, left, right) => {
  return {
    operator,
    value,
    left,
    right,
  };
};

const n1 = Node("+", null, n2, n3);
const n2 = Node("", 7, null, null);
const n3 = Node("x", null, n4, n7);
const n4 = Node("-", null, n5, n6);
const n5 = Node("", 3, null, null);
const n6 = Node("", 2, null, null);
const n7 = Node("", 5, null, null);
const n8 = Node("", 6, null, null);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());
