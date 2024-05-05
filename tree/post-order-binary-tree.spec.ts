import { test, expect } from "bun:test";
import { tree } from "./tree-sample";
import {
  postOrderBinaryTree,
  postOrderBinaryTreeIterative,
} from "./post-order-binary-tree";

test("Pre order", function () {
  const expected = [7, 5, 15, 10, 29, 45, 30, 100, 50, 20];
  expect(postOrderBinaryTree(tree)).toEqual(expected);
  expect(postOrderBinaryTreeIterative(tree)).toEqual(expected);
});
