/*
<< EVENT: EventHandlers ... >> 
    https://developer.mozilla.org/ko/docs/Web/API/HTMLElement
*/ 

const title = document.querySelector('div > h1');
console.dir(title); // title 이라는 객체에 사용할 수 있는 모~든 이벤트 핸들러를 확이할 수 있음

function handleTitleClick() {
    console.log("title was clicked");
    title.style.color = "blue"
    title.innerText = "Clicked"
}
function handleMouseEnter() {
    console.log("mouse is over here! ");
    title.innerText = "Mouse is on here"
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone";
}

function handleWindowResize() {
    alert('window is resized!');
    document.body.style.background = "hotpink"
}
function handleWindowCopy() {
    alert('copier!!!');
}

                // 내가 알고싶은 이벤트의 종류 , 이벤트 실행시 실행시킬 함수
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener('resize', handleWindowResize)
window.addEventListener('copy', handleWindowCopy)


// ----------------------------


const h1 = document.querySelector('div > h1');
console.dir(h1); // title 이라는 객체에 사용할 수 있는 모~든 이벤트 핸들러를 확이할 수 있음

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor; //재할당 가능 변수 선언

    if( currentColor == "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }

    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
