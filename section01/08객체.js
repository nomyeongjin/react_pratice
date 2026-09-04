// 객체란?
// -> 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함

// 1. 객체 생성
let obj1 = new Object() //객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name : "노명진", // key : value
    age : 28,
    hobby : "야구관람",
    extra : true
}

// key : 문자열이나 숫자열만 사용 가능. 띄어쓰기할 경우 ""로 감싸기
// value : 아무 자료형이나 사용 가능

// 3. 객체 프로퍼티 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

let name = person.name; // 노명진
let name2 = person.name2; // 없는 프로퍼티를 가져올 경우, undefined

let age = person["age"]; // 28
let age2 = person["age2"]; // 없는 프로퍼티를 가져올 경우, undefined

let pp = "hobby"; // 변수에 담아서 괄호표기법으로 프로퍼티를 꺼내올 수 있음.
let hobby = person[pp]; // 야구관람

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "developer";
person["favoraiteFood"] ="떡볶이";

// 3.3 프로퍼티 수정하는 방법
person.job = " Web developer";
person["favoraiteFood"] ="삼겹살";

console.log(person)

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoraiteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1) // true 반환

let result2 = "cat" in person;
console.log(result2) // false 반환

// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "후추",
    color : "white",

}

animal.age = 9;
animal.color = "black";

console.log(animal)

// 아예 새로운 상수에는 변수 수정 불가능
// 그러나 상수 안에 있는 프로퍼티는 수정 가능

// 2. 메서드
// -> 값이 함수인 프로퍼티

const person = {
    name : "노명진",
    // 메서드
    sayHi(){
        console.log("안녕!")
    },
}

person.sayHi();
person["sayHi"]();

