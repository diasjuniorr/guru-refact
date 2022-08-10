const assert = require("assert");

const Node = (operator, value, left, right) => {
  let state = {
    operator,
    value,
    left,
    right,
  };

  return Object.assign(state, result(state));
};

const result = (state) => ({
  result: () => {
    switch (state.operator) {
      case "+":
        return state.left.result() + state.right.result();
      case "-":
        return state.left.result() - state.right.result();
      case "x":
        return state.left.result() * state.right.result();
      case "÷":
        return state.left.result() / state.right.result();
      default:
        return state.value;
    }
  },
});

const n8 = Node("", 6, null, null);
const n7 = Node("", 5, null, null);
const n6 = Node("", 2, null, null);
const n5 = Node("", 3, null, null);
const n4 = Node("-", null, n5, n6);
const n3 = Node("x", null, n4, n7);
const n2 = Node("", 7, null, null);
const n1 = Node("+", null, n2, n3);

const tree = Node("÷", null, n1, n8);
console.log(tree.result());

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());
