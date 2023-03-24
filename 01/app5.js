/*
const loginForm  = document.getElementById("login-form");
const loginInput = loginForm.querySelector('input');
const loginBtn   = loginForm.querySelector('button');
*/
const loginInput = document.querySelector('#login-form input[type="text"]');
// const loginBtn   = document.querySelector('#login-form button');
const loginBtn   = document.querySelector('#login-form input[type="submit"]');


function clickLoginBtn() {
    const username = loginInput.value;
    // console.log('clicked!!');
    console.log(username);

    /*
    input이 가진 기본 특성을 이용하여 해당 조건들을 대체할 수 있다. 

        if (value == "" ) {                  == required  (input이 채워지도록 요구)
            alert('Plz! Write your name!');
        } else if ( value.length > 15 ) {    ==  maxlength="15"
            alert('your name is tooo long');
        } 
    */
}

loginBtn.addEventListener('click', clickLoginBtn);