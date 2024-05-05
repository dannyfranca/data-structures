import { test, expect } from "bun:test";
import { tree } from "./tree-sample";
import { breadthFirstSearch } from "./breadth-first-search";

test("bt bfs", function () {
  expect(breadthFirstSearch(tree, 45)).toEqual(true);
  expect(breadthFirstSearch(tree, 7)).toEqual(true);
  expect(breadthFirstSearch(tree, 69)).toEqual(false);
});
