/*
    const loginForm  = document.getElementById("login-form");
    const loginInput = loginForm.querySelector('input');
    const loginBtn   = loginForm.querySelector('button');


    localStorage : 브라우저에 정보를 저장할 수 있게 해주는
    localStorage.setItem('key', 'value'); // 로컬에 객체 저장 (키 & 값)
    localStorage.getItem('key') //value 반환
    localStorage.removeItem('key') // 해당 객체 제거 (키 & 값)

*/ 
const loginForm = document.querySelector('#login-form');
const loginInput   = document.querySelector('#login-form input');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "user_name";



const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

function paintGreeting(username) {
    greeting.innerText = `Hello~! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault(); // form의 새로고침(기본) 속성을 막는다
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem( USERNAME_KEY, username);

    paintGreeting(username); //login form에서 입력받아온 값을 출력 
}


if( savedUserName === null ) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreeting(savedUserName); //local storage에 저장된 이름을 받아 출력
}


/*
    const loginForm = document.querySelector('#login-form');
    const loginInput   = document.querySelector('#login-form input');
    const greeting = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";

    const savedUserName = localStorage.getItem(USERNAME_KEY);
    console.log(savedUserName);

    function onLoginSubmit(event) {
        event.preventDefault(); // form의 새로고침(기본) 속성을 막는다
        loginForm.classList.add(HIDDEN_CLASSNAME);
        localStorage.setItem( USERNAME_KEY, loginInput.value ); // localStorage.setItem( key, value); 객체의 키, 값 등록 

        // paintGreeting(username); //login form에서 입력받아온 값을 출력 
    }

    function paintGreeting() { //인자 값 없게 할 수 잇음......~~
        const username = localStorage.getItem(USERNAME_KEY)

        greeting.classList.remove(HIDDEN_CLASSNAME);
        greeting.innerText = `Hello~! ${username}`;
    }

    if( savedUserName === null ) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener('submit', onLoginSubmit);
    } else {
        paintGreeting(); //local storag에 저장된 이름을 받아 출력
    }
*/