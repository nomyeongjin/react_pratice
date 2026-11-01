// 6가지의 요소 조작 메서드

// 1. push
// -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3]
const newLength = arr1.push(4, 5, 6, 8) // 변경된 길이를 반환함. 결과값 7


console.log(arr1)
console.log(newLength)

// 2. pop
// -> 배열의 맨뒤에 있는 요소를 제거하고, 반환
let arr2 = [1,2,3]
const poppedItem = arr2.pop(); // 제거된 아이템 표시


console.log(arr2)
console.log(poppedItem)

// 3. shift
// -> 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3]
const shiftedItem = arr3.shift() // 제거된 아이템 표시

console.log(arr3)
console.log(shiftedItem)


// 4. unshift
// -> 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3]
const newLength2 = arr4.unshift(0); // 변경된 길이 반환함. 결과값 4

console.log(arr4)
console.log(newLength2)

/* push와 pop 보다 shift, unshift는 더 느리게 동작함 */
// -> 배열은 순차적으로 값을 저장하는데 앞에 있는 요소를 건들면 재배열해야하기 때문.

// 5. slice
// -> 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5]
let slicedItem = arr5.slice(2,3) // 배열.silce(자를 인덱스의 시작 번호,자를 인덱스의 마지막 번호+1) -> 번호 앞에서 자르기 때문
let slicedItem2 = arr5.slice(2) // 끝까지 자를거라면 생략가능.
let slicedItem3 = arr5.slice(-2) // 뒤에서 자르고 싶으면 음수를 기입하면됨. 뒤에서 한개 자르라는 뜻


console.log(slicedItem) // 부분만 보이는거지 실제 배열은 잘리지 않음.
console.log(arr5)
console.log(slicedItem2)
console.log(slicedItem3)

// 6. concat
// -> 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2]
let arr7 = [3,4]

let concatedArr = arr6.concat(arr7);

console.log(concatedArr) // 두 배열이 붙은 값이 저장됨

console.log("1섹션 완료")

/*----------------------*/

// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// -> 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arrA = [1,2,3]

arrA.forEach(function(item, index, arr){ // 콜백함수로 차례대로 아이템, 인덱스번호, 배열이 담김
    console.log(item, index)
})

let doubledArr = [];

arrA.forEach((item)=>{
    doubledArr.push(item*2)
})

console.log(doubledArr)

// 2. includes
// -> 배열에 특정 요소가 있는지 확인하는 메서드
let arrB = [1,2,3]
let includesB = arrB.includes(3); 

console.log(includesB) // true false값 반환

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드

let arrC =[1,2,3];
let index = arr3.indexOf(2);
console.log(index);

// 얕은 비교로 비교하기때문에 객체값은 비교하지 못함.
let objectArr =[
    {name:"노명진"},
    {name:"홍길동"}
];

console.log(objectArr.indexOf({name:"노명진"})); 

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arrD = [1,2,3]
const findedIndex = arrD.findIndex((item)=>item % 2 !==0)
console.log(findedIndex);

let objectArr2 =[
    {name:"노명진"},
    {name:"홍길동"}
];

// 조건식만 잘 써주면 잘 찾을 수 있음
console.log(objectArr2.findIndex(
    (item) => item.name ==="노명진"
)); 

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arrE = [
    {name : "노명진"},
    {name : "홍길동"}, 
]

const finded = arrE.find((item)=>item.name ==="노명진")
console.log(finded);

/* 5가지 배열 변형 메서드 */
// 1. filter
// 기본 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arrF = [
    {name : "노명진", hobby : "테니스"},
    {name : "김효빈", hobby : "테니스"},
    {name : "홍길동", hobby : "독서"}
]

const tennisPeople = arrF.filter((item)=> item.hobby === "테니스");

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arrG = [1,2,3]
const mapResult1 = arrG.map((item,idx,arr)=>{
    console.log(idx,item);
    return item *2
});

console.log(mapResult1);

let names = arrF.map((item)=>item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arrH = ["b","a","c"]
arrH.sort();

console.log(arrH);

// 숫자로 된 배열은 정렬되지 않음. -> 콜백함수로 비교대상을 지정해주어야함.
let arrI = [10,-1,5]

//오름차순
arrI.sort((a,b)=>{
    if(a>b){
        // b가 a앞에 와라
        return 1; // sort함수 쓸때 양수를 반환하면 둘 중 작은 값이 앞으로 옴
    }else if(a<b){
        // a가 b 앞에 와라
        return -1;
    }else{
        // a와 b의 값이 같다면 자리를 바꾸지 마라
        return 0;
    }
});

console.log(arrI);

// 내림차순
arrI.sort((a,b)=>{
    if(a<b){
        // b가 a앞에 와라
        return 1; // sort함수 쓸때 양수를 반환하면 둘 중 작은 값이 앞으로 옴
    }else if(a>b){
        // a가 b 앞에 와라
        return -1;
    }else{
        // a와 b의 값이 같다면 자리를 바꾸지 마라
        return 0;
    }
});

console.log(arrI);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드 -> 원본을 바꾸지 않음
let arrJ = ["c","a","b"]
const sorted = arrJ.toSorted();

console.log(arrJ);
console.log(sorted);

// 5. Join 
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arrK = ["hi", "im","winterlood"]
const joined = arrK.join(" "); // 메서드 안에 원하는 구분자를 넣어주면 그것으로 바뀜
console.log(joined);