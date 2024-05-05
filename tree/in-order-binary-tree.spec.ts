import { test, expect } from "bun:test";
import { tree } from "./tree-sample";
import {
  inOrderBinaryTree,
  inOrderBinaryTreeIterative,
} from "./in-order-binary-tree";

test("In order", function () {
  expect(inOrderBinaryTree(tree)).toEqual([
    5, 7, 10, 15, 20, 29, 30, 45, 50, 100,
  ]);
  expect(inOrderBinaryTreeIterative(tree)).toEqual([
    5, 7, 10, 15, 20, 29, 30, 45, 50, 100,
  ]);
});
