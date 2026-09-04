// 배열이란
// 여러개의 값을 순차적으로 담을 수 있는 자료형

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1,2,3,true,"hello"]; // 배열에는 어떤 값이든 얼마든지 넣을 수 있음. 

// 2. 배열 요소 접근
let i1 = arrC[0]; // 인덱스
let i2 = arrC[1];

console.log(i1, i2)

arrC[0] = "hello";
console.log(arrC)
console.log(i1)