export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

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
