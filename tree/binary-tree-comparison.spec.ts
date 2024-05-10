import { test, expect } from "bun:test";
import { compare, compareIterative } from "./binary-tree-comparison";
import { tree, tree2 } from "./tree-sample";

test("Compare Binary Trees", function () {
  expect(compare(tree, tree)).toEqual(true);
  expect(compare(tree, tree2)).toEqual(false);
  expect(compareIterative(tree, tree)).toEqual(true);
  expect(compareIterative(tree, tree2)).toEqual(false);
});
