import { test, expect } from "bun:test";
import crystalBalls from "./crystal-balls";

test("two crystal balls", function () {
  let idx = Math.floor(Math.random() * 10000);
  const data = new Array(10000).fill(false);

  for (let i = idx; i < 10000; ++i) {
    data[i] = true;
  }

  expect(crystalBalls(data)).toEqual(idx);
  expect(crystalBalls(new Array(821).fill(false))).toEqual(-1);
});
