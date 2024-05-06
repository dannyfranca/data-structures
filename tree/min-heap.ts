export default class MinHeap {
  private data: number[];

  constructor() {
    this.data = [];
  }

  get length() {
    return this.data.length;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length - 1);
  }

  delete(): number {
    if (!this.length) return -1;
    const outValue = this.data[0];
    if (this.length === 1) return this.data.pop()!;
    else this.data[0] = this.data.pop()!;

    this.heapifyDown(0);
    return outValue;
  }

  private heapifyDown(idx: number): void {
    const stack: number[] = [idx];

    while (stack.length) {
      const currIdx = stack.pop()!;
      if (currIdx >= this.length) return;
      const leftIdx = this.leftChildIdx(currIdx);
      if (leftIdx >= this.length) return;
      const rightIdx = this.rightChildIdx(currIdx);

      const currVal = this.data[currIdx];
      const leftVal = this.data[leftIdx];
      const rightVal = this.data[rightIdx];
      const minIdx = rightVal && rightVal < leftVal ? rightIdx : leftIdx;
      const minVal = this.data[minIdx];

      if (currVal > minVal) {
        this.swapIdx(currIdx, minIdx);
        stack.push(minIdx);
      }
    }
  }
  private heapifyUp(idx: number): void {
    // RECURSIVE
    // if (idx === 0) return;
    // const currVal = this.data[idx];
    // const parIdx = this.parentIdx(idx);
    // const parVal = this.data[parIdx];
    // if (parVal > currVal) {
    //   this.data[parIdx] = currVal;
    //   this.data[idx] = parVal;
    //   this.heapifyUp(parIdx);
    // }

    // ITERATIVE
    const stack: number[] = [idx];

    while (stack.length) {
      const currIdx = stack.pop()!;
      if (currIdx === 0) return;

      const currVal = this.data[currIdx];
      const parIdx = this.parentIdx(currIdx);
      const parVal = this.data[parIdx];
      if (parVal > currVal) {
        this.swapIdx(parIdx, currIdx);
        stack.push(parIdx);
      }
    }
  }

  private swapIdx(idxA: number, idxB: number) {
    const aVal = this.data[idxA];
    this.data[idxA] = this.data[idxB];
    this.data[idxB] = aVal;
  }

  private parentIdx(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChildIdx(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChildIdx(idx: number): number {
    return idx * 2 + 2;
  }
}
