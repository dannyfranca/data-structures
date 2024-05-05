import type { BinaryNode } from "./type";

export function postOrderBinaryTree(head: BinaryNode<number>): number[] {
  const path: number[] = [];

  walk(head, path);

  return path;
}

function walk(node: BinaryNode<number> | null, path: number[]) {
  if (!node) return;
  walk(node.left, path);
  walk(node.right, path);
  path.push(node.value);
}

export function postOrderBinaryTreeIterative(
  head: BinaryNode<number>
): number[] {
  const path: number[] = [];
  const stack: BinaryNode<number>[] = [];

  let curr: BinaryNode<number> | undefined | null = head;
  let lastVisited: BinaryNode<number> | null = null;

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      const peekNode = stack[stack.length - 1];
      if (peekNode.right && lastVisited !== peekNode.right) {
        curr = peekNode.right;
      } else {
        path.push(peekNode.value);
        lastVisited = stack.pop()!;
      }
    }
  }

  return path;
}
