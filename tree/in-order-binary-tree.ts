import type { BinaryNode } from "./type";

export function inOrderBinaryTree(head: BinaryNode<number>): number[] {
  const path: number[] = [];

  walk(head, path);

  return path;
}

function walk(node: BinaryNode<number> | null, path: number[]) {
  if (!node) return;
  walk(node.left, path);
  path.push(node.value);
  walk(node.right, path);
}

export function inOrderBinaryTreeIterative(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  const stack: BinaryNode<number>[] = [];

  let curr: BinaryNode<number> | undefined | null = head;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop()!;
    path.push(curr.value);
    curr = curr.right;
  }

  return path;
}
