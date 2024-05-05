import type { BinaryNode } from "./type";

export function preOrderBinaryTree(head: BinaryNode<number>): number[] {
  const path: number[] = [];

  walk(head, path);

  return path;
}

function walk(node: BinaryNode<number> | null, path: number[]) {
  if (!node) return;
  path.push(node.value);
  walk(node.left, path);
  walk(node.right, path);
}

export function preOrderBinaryTreeIterative(
  head: BinaryNode<number>
): number[] {
  const path: number[] = [];
  const stack: BinaryNode<number>[] = [];

  let curr: BinaryNode<number> | undefined | null = head;

  while (curr || stack.length) {
    while (curr) {
      path.push(curr.value);
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    curr = curr!.right;
  }

  return path;
}
