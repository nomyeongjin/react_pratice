// for문
for (i=1;i<=10;i++){

    if(i%2===0){
        continue; // 조건 충족 시 진행 !!위치중요
    }
    console.log(i+"번 반복")

    if(i>=5){
        break; // 조건 충족시 종료
    }

}