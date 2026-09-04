// 단락평가란?
// 연산자를 사용했을때 첫번째 피연산자에서 결과를 확정지을 수 있다면 뒤에 있는 피연산자에는 접근하지 않음.

function returnFalse(){
    console.log("False 함수")
    return false;
}

function returnTrue(){
    console.log("True 함수")
    return true;
}

console.log(returnFalse() && returnTrue()); // returnFalse 함수만 실행됨.
console.log(returnTrue() && returnFalse()); // 뒷 피연산자에도 접근을 해야 결과를 확정 지을 수 있어서 함수 모두 호출됨.

// Truthy한 값과 Falsy한 값을 넣었을 경우
function returnFalsy(){
    console.log("False 함수")
    return undefined;
}

function returnTruy(){
    console.log("True 함수")
    return 10;
}



console.log(returnTruy() || returnFalsy()); // 단락평가가 이루어져 앞피연산자 함수만 호출되면 Truthy한 값 자체가 출력됨
console.log(returnFalsy() && returnTruy()); // 콘솔에 undefined가 출력됨

// 단락 평가 활용 사례
function printName(person){
    const name = person && person.name // 이 연산자를 먼저 판단
    console.log(name || "person의 값이 없음") // 이후 name의 값이 없을 경우 뒤에 있는 값이 출력됨
}

printName();
printName({name: "노명진"})