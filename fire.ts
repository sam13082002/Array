//Tìm giá trị lớn nhất và nhỏ nhất của 1 mảng
//Input [1,2,3,4]
//OUtput:
//Giá trị lớn nhất: 4
//giá trị nhỏ nhất: 1
let a = [1, 2, 3, 4];
let c = 0;
let d = 5;
for (let i = 0; i < a.length; i++) {
  if (c < a[i]) {
    c = a[i];
  }
  if (d > a[i]) {
    d = a[i];
  }
}
console.log("gia tri lon nhat la:", c);
console.log("gia tri nho nhat la:", d);
