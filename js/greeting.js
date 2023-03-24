const loginForm = document.querySelector('#login-form');
const loginInput   = document.querySelector('#login-form input');
const greeting = document.querySelector("#greeting");
const infoWrap = document.querySelector(".info-wrap");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "user_name";

const profiles = [
    "../images/face01.png",
    "../images/face02.png",
    "../images/face03.png",
    "../images/face04.png",
    "../images/face05.png",
];

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

function paintGreeting(username) {
    greeting.innerText = `${username}`;
    infoWrap.classList.remove(HIDDEN_CLASSNAME);
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
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(savedUserName); //local storage에 저장된 이름을 받아 출력
}