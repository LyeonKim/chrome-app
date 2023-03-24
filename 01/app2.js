const age = prompt('how old are you? put number of your age'); 

console.log( age, parseInt(age)); 
    //parseInt(); 정수 반환 함수 -> 숫자만을 반환
    // 12.5, 12 // 12.5를 정수화하여 12로 반환함
    // ㅁㅎㄷㅎㄷ NaN // 문자열을 넣으면 정수로 반환하지 못함

if(isNaN(age) || age < 0 ) { 
    alert( 'Plz, you have to put only number.');
} else if ( age <= 18 ) {
    // console.log("you're too young ");
    alert("you're too young to drink");
} else if ( 18 < age && age < 60){
    alert('you can drink! enjoy ');
} else { //60이상의 숫자가 입력되면
    alert("I think you'll be better to not to drink!  ");
}

//조건은 위에서 아래로 순차적으로 실행되기때문에, else if 문을 사용 할 땐 순서가 중요하다

if((a && b) || (c && d)) { }