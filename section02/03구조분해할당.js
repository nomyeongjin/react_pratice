// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

let [one, two, three, four=4] = arr; // 각 배열에 one, two, three가 저장됨
console.log(one,two,three,four);

// 2. 객체의 구조 분해 할당
let person={
    name : "노명진",
    age : 28,
    cat :"후추"
}

let {name, age : myAge /* 키 값을 :을 사용하여 추가 가능*/, hobby, extra ="hello"} = person; //직접 프로퍼티에 기본값을 추가 가능함
console.log(name, myAge, hobby, extra); //hobby는 없는 값이므로 undefined가 출력됨

// 3. 객체 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age,cat, hobby, extra})=>{ // 매개변수 부분에 바로 구조분해 할당을 해주면 값을 바로 받아올 수 있음
    console.log(name, age, cat, hobby, extra);
}

func(person)