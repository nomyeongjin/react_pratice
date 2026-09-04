let num = 10;

// 1. 대입 연산자 =

// 2. 산술 연산자 +, -, *, /, %

// 3. 복합 대입 연산자 
num += 20;
num -= 20;
num *= 20;
num /= 20;
num %= 20;


// 4. 증감 연산자
num++; // 후위 연산 // 이 다음 라인에서 증가함.
++num; // 전위 연산 // 이래야 이 라인에서 증가함

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or,and,not)

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;

console.log(comp1, comp2)

// == 값만 비교 
// === 자료형까지 비교

let comp3 = 1>2;
let comp4 = 1<2;

console.log(comp3, comp4)

let comp5 = 2>=2;
let comp6 = 1<=2;

console.log(comp5, comp6)

// 7. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var4 = 20;

let var3 = var1 ?? var2;

let var5 = var2??var4; // 둘다 null과 undefined이 아니기 때문에 처음에 적힌 값이 출력된다.

// 실무 예시
// 실명이 있다면 실명으로 실명이 null값이라면 닉네임으로 출력하라
let name = "노명진"
let nickName = "nmj"

let displayName = name??nickName;
console.log(displayName) // 연산 앞에 적혀있는 name값 출력

// 8. typeOf 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let t = 1;
t = "hello";

let t1 = typeof t;
console.log(t1)

// 9. 삼항 연산자
// 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 ===0 ?"짝수" : "홀수"
console.log(res)

