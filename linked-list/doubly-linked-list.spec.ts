import { describe, beforeEach, test, expect } from "bun:test";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("DoublyLinkedList", () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  test("prepend adds elements to the beginning of the list", () => {
    list.prepend(1);
    list.prepend(2);
    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(2);
    expect(list.get(1)).toBe(1);
  });

  test("append adds elements to the end of the list", () => {
    list.append(1);
    list.append(2);
    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
  });

  test("insertAt inserts elements at a specific index", () => {
    list.append(1);
    list.append(3);
    list.insertAt(2, 1);
    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
  });

  test("remove removes the first occurrence of an element", () => {
    list.append(1);
    list.append(2);
    list.append(1);
    expect(list.remove(1)).toBe(1);
    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(2);
    expect(list.get(1)).toBe(1);
  });

  test("removeAt removes an element at a specific index", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    const removedItem = list.removeAt(1);
    expect(removedItem).toBe(2);
    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(3);
  });

  test("get retrieves an element at a specific index", () => {
    list.append(1);
    list.append(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBeUndefined();
  });
});
