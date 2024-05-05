import type { BinaryNode } from "./type";

export function compare<T>(
  a: BinaryNode<T> | null,
  b: BinaryNode<T> | null
): boolean {
  if (!a && !a) return true;
  if (!a || !b) return false;
  if (a.value !== b.value) return false;

  return compare(a.left, b.left) && compare(a.right, b.right);
}

export function compareRecursive<T>(
  bta: BinaryNode<T> | null,
  btb: BinaryNode<T> | null
): boolean {
  const stack: [
    BinaryNode<T> | null | undefined,
    BinaryNode<T> | null | undefined
  ][] = [[bta, btb]];

  while (stack.length) {
    const [a, b] = stack.pop()!;
    if (!a && !b) continue;
    if (!a || !b) return false;
    if (a.value !== b.value) return false;
    stack.push([a.left, b.left], [a.right, b.right]);
  }

  return true;
}
