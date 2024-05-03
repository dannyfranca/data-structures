const a = new ArrayBuffer(6);
console.log(a); // series of 6 zeros
// 8-bit view, numbers between 0 and 255
// It means that for every offset in the array, we can store a number between 0 and 255
const a8 = new Uint8Array(a);
a8[0] = 45;
a8[2] = 1000;
console.log(a); // ArrayBuffer [ 45, 0, 232, 0, 0, 0 ]
console.log(a8); // Uint8Array [ 45, 0, 232, 0, 0, 0 ]
const a16 = new Uint16Array(a); // 16-bit view, numbers between 0 and 65535
console.log(a16); // Uint16Array [ 45, 232, 0 ]
a16[2] = 0x4535;
console.log(a); // ArrayBuffer [ 45, 0, 232, 0, 69, 69 ]
console.log(a16); // Uint16Array [ 45, 232, 17733 ]
// each position in the array is 2 bytes long, so thee hex 0x4545 is split into two 8-bit numbers, 0x35 and 0x45, which are stored in the array as 53 and 69 in decimal.
