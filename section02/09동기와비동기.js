// 동기란?
// 여러개의 작업이 있을 때, 순서대로 한 번에 하나씩 처리하는 방식
// JavaScript는 동기적으로 코드를 실행한다.

// 단점
// 전체 프로그램이 모두 순서대로 작동하기 때문에 오래 걸릴 수 있다.

// 비동기
// 여러 개의 작업이 있을 때, 순서대로 작업을 처리 하지 않음.
// 앞선 작업이 완료되지 않아도 기다리지 않고 처리할 수 있음.

console.log(1);

// 3초가 지난 뒤 아래의 함수를 실행함.
setTimeout(()=>{
    console.log(2);
},3000)

console.log(3);

// 결과값 -> 1,3,2

// 비동기가 가능한 이유
// 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs에서 실행됨.

// Web APIs란
// 웹 브라우저가 직접 관리하는 별도의 영역
// 자바스크립트에서 비동기를 인식하면 Wep APIs에 콜백함수까지 다시 보냄.
// 모든 동기 작업이 이루어진 다음 Web APIs에게 비동기 작업을 다시 돌려받고 처리함.

// * 비동기 작업 처리하기 *
// 1. 콜백 함수

function add(a,b,callback){
    setTimeout(()=>{
        const sum = a+b; // 3
        callback(sum);
    },3000)
}

// 함수 외부에서 사용하고 싶다면 콜백 함수를 이용하여 비동기처리를 할 수 있음.
add(1, 2, (value) => {
    console.log(value);
})

// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food)
    },3000)
}

function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood)
    },2000)
}

function freezeFood(food,callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood)
    },1500)
}


orderFood((food)=>{
    console.log(food);
    cooldownFood(food, (cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood,(freezedFood)=>{
        console.log(freezedFood);
    })
    });
    
})

// 2. promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// promise는 비동기 작업을 감싸는 객체이다.

// promise의 효능
// 1. 비동기 작업 실행
// 2. 비동기 작업 상태 관리
// 3. 비동기 작업 결과 저장 
// 4. 비동기 작업 병렬 실행
// 5. 비동시 작업 다시 실행
// 등등..

// promise의 3가지 상태
// 대기 (Pending) -> 아직 작업이 완료되지 않은 상태
// 성공 (Fulfilled) -> 비동기 작업이 성공적으로 마무리된 상태
// 실패 (Rejected) -> 비동기 작업이 실패한 상태

// 대기 -> 성공 = 해결 (resolve)
// 대기 -> 실패 = 거부 (reject)
function add10(num){
    const promise = new Promise((resolve,reject)=>{
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(()=>{

        if(typeof num==='number'){
            resolve(num+10);
        }else{
            reject("num이 숫자가 아닙니다.")
        }
        // reject를 호출하면 실패함

        },2000);
    });

    return promise;
}

// then 메서드
// -> 그 후에
// 성공했을때만 호출되는 메서드
const p = add10(0)
.then((result)=>{
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
    return add10(undefined)
}).then((result)=>{
    console.log(result);
    return add10(result)
}).catch((error)=>{
    console.log(error);
})
