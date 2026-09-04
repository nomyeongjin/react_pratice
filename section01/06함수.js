// 함수 선언

// function greeting(){
//     console.log("안녕하세요!")
// }

// greeting(); // 함수 호출

function getArea(width, height){ // 소괄호 안에 변수를 선언하고 호출할때 값을 적으면 적용되어 호출된다.
    
    function greeting(){ // 함수 안에 함수 호출도 가능 *중첩 함수
        console.log("안녕하세요!")
    }
    greeting(); 
    let area = width * height;

    return area; // 반환값
    // 이 밑으로는 함수가 끝나서 출력되지 않음
}

let area1 = getArea(10, 20); // 함수 호출하고 > return으로 반환하면 > area1에 담김
console.log(area1)


//호이스팅
// -> 끌어올리다 라는 뜻
// 함수 선언을 호출문 보다 아래에 적어도 잘 호출이 됨.
// 자바스크립트의 장점


// 1. 함수 표현식
// -> 호이스팅 적용 X
// -> 꼭 함수 선언 아래에 호출해야함.

function funcA(){
    console.log("funcA");
}

let varA = funcA;// 함수 자체가 출력됨.
varA();

let varB = function (){ // 익명 함수
    console.log("funcB")
}
varB();


// 2. 화살표 함수
let varC= ()=>{
    return "함수 C 호출";
}
console.log(varC());

// 더 간략한 표현
let varD = () => "함수 D 호출";
console.log(varD());

// 매개변수가 필요한 경우 소괄호 안에 매개변수 작성 후 함수 호출 시 값을 적어주면 됨.
let varE = (value) => value + "함수 E 호출";
console.log(varE(10));


// 콜백 함수
// -> 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미함

function main(value){

    console.log(1);
    console.log(2);
    value(); // 2. 매개변수(sub함수)를 실행
    console.log("end")
}

function sub(){
    console.log("I'm sub")
}

main(sub); // 1. main 매개변수에 sub 함수 자체를 담음

// 콜백함수의 활용
function repeat(count, callback){
    for(i=1;i<=count;i++){
        callback(i);
    }
    console.log("repeat 함수 끝")
}


repeat(5 , function(i){ // 원하는 조건으로 바꾸어서 간단하게 콜백 함수를 이용해서 코드 작성 가능
    console.log(i);
});

repeat(5 , function(i){
    console.log(i*5);
});