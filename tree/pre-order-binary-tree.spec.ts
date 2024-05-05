import { test, expect } from "bun:test";
import {
  preOrderBinaryTree,
  preOrderBinaryTreeIterative,
} from "./pre-order-binary-tree";
import { tree } from "./tree-sample";

test("Pre order", function () {
  expect(preOrderBinaryTree(tree)).toEqual([
    20, 10, 5, 7, 15, 50, 30, 29, 45, 100,
  ]);
  expect(preOrderBinaryTreeIterative(tree)).toEqual([
    20, 10, 5, 7, 15, 50, 30, 29, 45, 100,
  ]);
});
