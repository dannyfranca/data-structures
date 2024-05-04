import { test, expect } from "bun:test";
import bubbleSort from "./bubbe-sort";

test("bubble-sort", function () {
  const arr = [9, 3, 7, 4, 69, 420, 42];

  debugger;
  bubbleSort(arr);
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
