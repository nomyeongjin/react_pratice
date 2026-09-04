// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
let arr2 = [4,...arr1, 5, 6]; // 배열 사이에 Spread 연산자를 이용해서 배열을 뿌려둠

let obj1 = {
    a:1,
    b:2,
}

let obj2 = {
    ...obj1,
    c:3,
    d:4
}

console.log(obj2)

function funcA(p1,p2,p3){
    console.log(p1,p2,p3)
}
funcA(...arr1)


// 2. REST 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(one,...rest){ // 매개변수에 쓰는 ...은 Spread 연산자와 다름
    // rest 매개변수 뒤에는 추가적인 매개변수는 선언할 수 없음.
    // ...만 붙으면 이름은 상관없음.
    console.log(one,rest) 
}

funcB(...arr1)