import { test, expect } from "bun:test";
import { Trie } from "./trie";

test("Trie", function () {
  const trie = new Trie();

  trie.insert("apple");
  trie.insert("app");
  trie.insert("banana");

  expect(trie.search("apple")).toBe(true);
  expect(trie.search("app")).toBe(true);
  expect(trie.search("banana")).toBe(true);
  expect(trie.search("grape")).toBe(false);

  expect(trie.startsWith("ban")).toBe(true);
  expect(trie.startsWith("app")).toBe(true);
  expect(trie.startsWith("orange")).toBe(false);

  trie.delete("apple");
  expect(trie.search("apple")).toBe(false);
  expect(trie.search("app")).toBe(true);
  expect(trie.search("banana")).toBe(true);
});
