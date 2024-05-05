import type { BinaryNode } from "./type";

export function depthFirstSearch<T>(node: BinaryNode<T>, needle: T): boolean {
  return search(node, needle);
}

function search<T>(node: BinaryNode<T> | null, needle: T): boolean {
  if (!node) return false;
  if (node.value === needle) return true;
  if (needle <= node.value) return search(node.left, needle);
  return search(node.right, needle);
}

export function depthFirstSearchRecursive<T>(
  node: BinaryNode<T>,
  needle: T
): boolean {
  const stack = [node];
  let curr: BinaryNode<T>;

  while (stack.length) {
    curr = stack.pop()!;
    if (curr.value === needle) return true;
    if (needle <= curr.value && curr.left) {
      stack.push(curr.left);
      continue;
    }
    if (needle > curr.value && curr.right) stack.push(curr.right);
  }

  return false;
}
