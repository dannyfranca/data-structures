export default function crystalBalls(breaks: boolean[]): number {
  let jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) break;
  }

  // TODO: improve by using recursion for constant square root of N
  i -= jumpAmount;
  for (; i < breaks.length; i += 1) {
    if (breaks[i]) return i;
  }

  return -1;
}
