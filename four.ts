//Tính tổng các số chẵn trong mảng và hiệu các số lẻ trong mảng
//Input: [1,2,3,4]
//Output:
//Tổng các số chẵn: 10
//Hiệu các số lẻ: -8
let sum = 0;
let sam = 0;
let a = [1, 2, 3, 4];
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    sum = sum + a[i];
  }
  if (a[i] % 2 != 0) {
    sam = sam - a[i];
  }
}
console.log(" tong so chan la", sum);
console.log(" hieu so le la", sam);
