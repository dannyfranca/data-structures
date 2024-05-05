import type { BinaryNode } from "./type";

export function compare<T>(
  a: BinaryNode<T> | null | undefined,
  b: BinaryNode<T> | null | undefined
): boolean {
  if (!a && !a) return true;
  if (!a || !b) return false;
  if (a.value !== b.value) return false;

  return compare(a.left, b.left) && compare(a.right, b.right);
}
