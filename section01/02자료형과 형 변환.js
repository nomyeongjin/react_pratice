// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// % 연산 == 모듈러 연산

let inf = Infinity;
let minf = -Infinity;

let nan = NaN;

console.log(1*"hello");

// 2. String Type
let myName = "노명진";

// String 값은 더햇을 경우 이어진 문자열로 나옴.

// `` 백틱으로 만들 경우, ${} 동적으로 문자열을 넣을 수 있음.
let intro = `${myName}은 양주에 산다.`
console.log(intro);

// 3. 

// 형변환
// 1. 묵시적 형변환
// - > 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";
const result = num+str;
console.log(result)

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자

let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개"
let strToNum2 = parseInt(str2); // 숫자만 있지 않은 문자열을 형 변환 할때 사용. 문자가 앞에 있을 경우에는 변환 X


// -> 숫자 -> 문자열
let num4 = 20;
let numToStr = String(num4);

console.log(numToStr+"입니다.")

