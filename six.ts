//Tính trung bình cộng các giá trị trong mảng
//Input: [1,2,3,4]
//Output: 2.5
let b = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < b.length; i++) {
  sum = sum + b[i];
}
console.log(sum / 4);
