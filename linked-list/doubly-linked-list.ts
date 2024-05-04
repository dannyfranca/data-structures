interface Node<T> {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
}

export class DoublyLinkedList<T> {
  length: number;
  head?: Node<T>;
  tail?: Node<T>;

  constructor() {
    this.length = 0;
  }

  prepend(item: T) {
    const node: Node<T> = { value: item };

    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  append(item: T) {
    const node: Node<T> = { value: item };

    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  insertAt(item: T, idx: number) {
    if (idx >= this.length) throw new Error("index bigger than length");
    if (idx === 0) return this.prepend(item);
    if (idx === this.length) return this.append(item);

    this.length++;
    let curr = this.getAt(idx)!;

    const node: Node<T> = { value: item };
    node.next = curr;
    node.prev = curr.prev;
    if (node.prev) node.prev.next = node;
    curr.prev = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; ++i) {
      if (curr?.value === item) break;
      curr = curr.next;
    }
    if (!curr) return;
    return this.removeNode(curr);
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);
    if (!node) return;
    return this.removeNode(node);
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }

  private getAt(idx: number): Node<T> | undefined {
    let curr = this.head;
    for (let i = 0; i < idx; ++i) {
      curr = curr?.next;
    }
    return curr;
  }

  private removeNode(node: Node<T>): T {
    this.length--;

    if (node.prev) node.prev.next = node.next;
    if (node === this.head) this.head = node.next;

    if (node.next) node.next.prev = node.prev;
    if (node === this.tail) this.tail = node.prev;

    node.next = node.prev = undefined;
    return node.value;
  }
}
