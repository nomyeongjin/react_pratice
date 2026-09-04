// Javascript에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가함.
// 이를 이용하면 조건문을 간결하게 만들 수 있음

// undefined의 경우 거짓으로 들어감

// Truthy & Falsy
// -> 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징.

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; 

if(!f1){
    console.log("falthy")
}

// 2. Truthy 한 값
// -> 7가지 Falsy한 값들 제외한 나머지 모든 값
let t1 = "hello"
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = ()=>{};

if(t4){
    console.log("Truthy")
}

// 3. 활용 사례

function printName(person){
    if(!person){ // undefined과 null을 한번에 감별할 수 있게 Falsy한 값을 조건으로 사용
        console.log("person의 값이 없음")
        return;
    }
    console.log(person.name);
}

let person = {name:"노명진"};
printName(person);