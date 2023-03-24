/*
    문서에 접근할 수 있는 document  
    -> document는 하나의 객체이다.
        document. title/ 
*/

document.title = "make Chrome by vanila JS"
document.title = "lyeonkim"

// const title = document.getElementById('title'); //<h1 id="title">Grab Me</h1>
// title.innerText = "Hello?";

// console.log(title.className);
// console.log(title.id);

const hellos = document.getElementsByClassName("hello"); 

console.log(hellos); //HTMLCollection(5) [div.hello, h1.hello, h1.hello, h1.hello, h1.hello]

const title = document.getElementsByTagName("h1");
console.log(title); //HTMLCollection [h1]

const title2 = document.querySelector(".hello h1");
console.log(title2); //<h1>Grab Me</h1>
console.dir(title2); //h1 { ...info }
/*
<< console.dir(); >> 
    - https://developer.mozilla.org/ko/docs/Web/API/console/dir
    - 해당 객체의 속성을 인터랙티브한 목록으로 표시
    - html과 비슷한 트리구조로 출력하는 log와는 다르게, 요소를 'JSON과 같은 트리구조'로 출력한다

*/

title2.style.color = "red"
title2.style.fontSize = "40px"