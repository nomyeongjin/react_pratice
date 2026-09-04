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



function getRequiredCorn(targetOil) {
    const cornPerOil = 6 / 3;
    return targetOil * cornPerOil;
}
console.log(getRequiredCorn(100));