interface Node<T> {
  value: T;
  prev?: Node<T>;
}

export class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    const node: Node<T> = { value: item };

    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const value = this.head?.value;
      this.head = undefined;
      return value;
    }

    const head = this.head!;
    this.head = this.head?.prev;
    head.prev = undefined;
    return head.value;
  }

  peek() {
    return this.head?.value;
  }
}
