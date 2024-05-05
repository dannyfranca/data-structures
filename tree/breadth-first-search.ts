import { Queue } from "../linked-list/queue";
import type { BinaryNode } from "./type";

export function breadthFirstSearch(
  bt: BinaryNode<number>,
  needle: number
): boolean {
  const q = new Queue<BinaryNode<number>>();
  q.enqueue(bt);

  while (q.length) {
    const curr = q.dequeue()!;
    if (curr.value === needle) return true;
    if (curr.left) q.enqueue(curr.left);
    if (curr.right) q.enqueue(curr.right);
  }

  return false;
}
