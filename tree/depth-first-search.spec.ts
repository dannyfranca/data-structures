import { test, expect } from "bun:test";
import {
  depthFirstSearch,
  depthFirstSearchRecursive,
} from "./depth-first-search";
import { tree } from "./tree-sample";

test("DFS on BST", function () {
  expect(depthFirstSearch(tree, 45)).toEqual(true);
  expect(depthFirstSearch(tree, 7)).toEqual(true);
  expect(depthFirstSearch(tree, 69)).toEqual(false);
  expect(depthFirstSearchRecursive(tree, 45)).toEqual(true);
  expect(depthFirstSearchRecursive(tree, 7)).toEqual(true);
  expect(depthFirstSearchRecursive(tree, 69)).toEqual(false);
});
