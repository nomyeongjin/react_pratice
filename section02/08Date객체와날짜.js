// 1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자
console.log(date1);

let date2 = new Date("1997-01-01/10:10:10") // 날짜 형식은 대시, 슬래시, 점으로 구분함. 시간도 지정할 수 있음.
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
//               ㄴ 협정세계시 (UTC)
let ts1 = date1.getTime(); // 타임스탬프를 계산하는 메서드
console.log(ts1);

let date4 = new Date(ts1)
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear()
let month = date1.getMonth()+1; // 월은 0이 1월 1가 2월 -> 배열 인덱스와 같아 늘 +1을 붙여야 현재 달의 값이 나옴
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year,month,date,hour,minute,seconds);

// 4. 시간 수정하기
date1.setFullYear(2023) //인수로 수정할 숫자를 넣으면 됨.
date1.setMonth(3)
date1.setDate(30)
date1.setHours(23)
date1.setSeconds(20)

console.log(date1);

// 5. 시간을 여러 포멧으로 출력하기

// 시분초 x
console.log(
    date1.toDateString()
);

// 한국 표준시로 출력
console.log(
    date1.toLocaleDateString()
);