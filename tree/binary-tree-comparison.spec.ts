import { test, expect } from "bun:test";
import { compare, compareRecursive } from "./binary-tree-comparison";
import { tree, tree2 } from "./tree-sample";

test("Compare Binary Trees", function () {
  expect(compare(tree, tree)).toEqual(true);
  expect(compare(tree, tree2)).toEqual(false);
  expect(compareRecursive(tree, tree)).toEqual(true);
  expect(compareRecursive(tree, tree2)).toEqual(false);
});
