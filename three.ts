//Viết chương trình in ra bảng cửu chương của số đó
//Input: 2
//Ouput:
//2x1 =2
//2x2 =4
//2x3 =6
//2x4 =8
//... ( tiếp tục các số tiếp theo đến 10 )
//2x10 =20
let b = 2;

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= c.length; i++) {
  console.log(2, "x", i, "=", b * i);
}
