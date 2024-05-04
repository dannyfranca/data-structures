export class RingBuffer<T> {
  private readonly buffer: T[];
  private headIndex: number;
  private tailIndex: number;
  private size: number;

  constructor(private readonly capacity: number) {
    this.buffer = new Array(capacity);
    this.headIndex = 0;
    this.tailIndex = 0;
    this.size = 0;
  }

  write(item: T): void {
    this.buffer[this.tailIndex] = item;
    this.tailIndex = (this.tailIndex + 1) % this.capacity;
    if (this.size < this.capacity) this.size++;
    else this.headIndex = (this.headIndex + 1) % this.capacity;
  }

  readFirst(): T | undefined {
    return this.buffer[this.headIndex];
  }

  readLast(): T | undefined {
    return this.buffer[this.tailIndex - 1];
  }
}
