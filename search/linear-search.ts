export default function linearSearch<T>(haystack: T[], needle: T) {
  for (const i in haystack) {
    if (haystack[i] === needle) return true;
  }
  return false;
}
