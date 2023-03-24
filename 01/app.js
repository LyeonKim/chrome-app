const h1 = document.querySelector('div > h1');




/*
    변수.className 은 class명을 바꿔치기 해주는 것 -> 기존의 class명이 사라진다.
    function handleTitleClick() {
        const clickedClass = "active";
        if ( h1.className == clickedClass ) {
            h1.className = "";
        } else {
            h1.className = clickedClass;
        }
    }
*/ 

/*
    .classList.
            [ conatins/ add/ remove ]

    function handleTitleClick() {
        const clickedClass = "active";
        if ( h1.classList.contains(clickedClass) ) {
            h1.classList.remove(clickedClass);
        } else {
            h1.classList.add(clickedClass);
        }
}
*/

function handleTitleClick() {
    h1.classList.toggle('active'); 
}


/*  
    className - 클래스를 바꿔치기 replace
    classList - 클래스를 추가 삭제 

*/

h1.addEventListener("click", handleTitleClick);