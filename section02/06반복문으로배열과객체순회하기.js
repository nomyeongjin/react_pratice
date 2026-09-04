// 순회란?
// -> 배열, 객체에 저장된 여러개의 값에 *순서대로 하나씩 접근하는 것을 말함

// 1. 배열 순회
let arr  = [1, 2, 3]

// 1.1 배열 인덱스
for(let i=0;i<arr.length;i++){ // i가 배열의 길이보다 작아야함
    console.log(arr[i])
}

let arr2 = [4, 5, 6, 7, 8]
for(let i=0;i<arr2.length; i++){
    console.log(arr2[i])
}

// 1.2 for of 반복문
for(let item of arr){ // 배열 arr의 인덱스를 하나씩 꺼내 item에 저장하겠다.
    console.log(item)
}

// 2. 객체 순회
let person ={
    name : "노명진",
    age : 28,
    cat : "후추"
}

// 2.1 Object.keys 사용
// -> 객체에서 key값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);

// for 문 사용
for(let i=0;i<keys.length;i++){
    console.log(keys[i])
}

//for of문 사용
for(let i of keys){
    const value = person[i]
    console.log(i,value) // value도 같이 보고 싶으면 직접 가져오기
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for(let value of values){
    console.log(value)
}

// 2.3 for in
for(let key in person){
    const value = person[key]; // 괄호표기법
    console.log(key, value)
}