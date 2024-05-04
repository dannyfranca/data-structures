import { test, expect, describe, beforeEach } from "bun:test";
import { RingBuffer } from "./ring-buffer";

describe("RingBuffer", () => {
  let buffer: RingBuffer<number>;

  beforeEach(() => {
    buffer = new RingBuffer<number>(5);
  });

  test("should write and read elements correctly", () => {
    buffer.write(1);
    expect(buffer.readLast()).toBe(1);
    expect(buffer.readFirst()).toBe(1);
    buffer.write(2);
    expect(buffer.readLast()).toBe(2);
    expect(buffer.readFirst()).toBe(1);
    buffer.write(3);
    expect(buffer.readLast()).toBe(3);
    expect(buffer.readFirst()).toBe(1);
    buffer.write(4);
    buffer.write(5);
    buffer.write(6);
    expect(buffer.readLast()).toBe(6);
    expect(buffer.readFirst()).toBe(2);
  });

  test("should return undefined when reading from an empty buffer", () => {
    expect(buffer.readLast()).toBeUndefined();
    expect(buffer.readFirst()).toBeUndefined();
  });
});
