// 1. if 조건문 (if문)
let num = 9;

if(num>=10){
    console.log("num은 10 이상입니다.");
} else if(num>=5){
    console.log("num은 5 이상입니다.");
} else {
    console.log("조건을 만족하지 못합니다.");
}

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

// break가 없다면 하나만 조건에 맞으면 모두 출력
switch(animal){
    case "cat":{
        console.log("고양이")
        break;
    }
    case "dog":{
        console.log("강아지")
        break;
    }
    case "snake":{
        console.log("뱀")
        break;
    }
    case "tiger":{
        console.log("호랑이")
        break;
    }
    default:{
        console.log("모든 동물에 해당하지 않습니다.")
        // 조건에 모두 해당하지 않을때 출력
    }
}