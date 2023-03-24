/*
const loginForm  = document.getElementById("login-form");
const loginInput = loginForm.querySelector('input');
const loginBtn   = loginForm.querySelector('button');
*/
const loginForm = document.querySelector('#login-form');
const loginInput   = document.querySelector('#login-form input');

const link = document.querySelector('.link');

// 새로고침은 form submit의 기본 동작이다 -> 추가로 설정을 해줘야만 input입력 값을 

function onLoginSubmit(event) {
    event.preventDefault(); // form의 새로고침(기본) 속성을 막는다
    console.log(loginInput.value);
}

function handleLink(event) {
    // alert('clicked'); 
    /*
    alert = 모든 동작을 막는 특징이 있어 잘 사용하지 않는다.
    ==> a의 실행을 멈추고 alert 실행 -> alert의 확인을 누른 뒤에 링크로 넘어감.
    */ 
    event.preventDefault(); //alert 확인을 눌러도 링크 이동이 안됨 -> 기본 특성을 지워버렸기 때문에.
    console.log(event);
        //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
}

loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', handleLink);
