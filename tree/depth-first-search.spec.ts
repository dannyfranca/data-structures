import { test, expect } from "bun:test";
import {
  depthFirstSearch,
  depthFirstSearchIterative,
} from "./depth-first-search";
import { tree } from "./tree-sample";

test("DFS on BST", function () {
  expect(depthFirstSearch(tree, 45)).toEqual(true);
  expect(depthFirstSearch(tree, 7)).toEqual(true);
  expect(depthFirstSearch(tree, 69)).toEqual(false);
  expect(depthFirstSearchIterative(tree, 45)).toEqual(true);
  expect(depthFirstSearchIterative(tree, 7)).toEqual(true);
  expect(depthFirstSearchIterative(tree, 69)).toEqual(false);
});
