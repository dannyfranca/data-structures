// this works on the assumption that the array is sorted
export default function binarySearch<T>(haystack: T[], needle: T): boolean {
  let lo: number = 0;
  let hi: number = haystack.length;

  do {
    const m = findMiddleIndex(lo, hi);
    const v = haystack[m];

    if (v == needle) return true;
    else if (v > needle) hi = m;
    else lo = m + 1;
  } while (lo < hi);

  return false;
}

function findMiddleIndex(low: number, high: number) {
  return Math.floor(low + (high - low) / 2);
}
