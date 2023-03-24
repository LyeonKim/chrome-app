const todoFrom = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form > input');

const todoList  = document.querySelector('.todo-list');

const TODOS_KEY = 'ToDos';

// const todos = []; 
    // 업데이트가 안되는 상수 -> application이 시작 될  때 todos는 항상 [] 빈 배열이다. 
    // => 우리는 todos라는 배열에 값을 할당해서 저장하고 싶기 때문에 "재할당 가능"한 "let" 사용 
let todos = []; 

function saveTodos() {
    // localStorage.setItem( TODOS_KEY , todos);
    localStorage.setItem( TODOS_KEY , JSON.stringify(todos));
        // .stringify(); 그 어떤 js코드도 모두 string으로 변환해주는 함수
}

function deleteTodo(e) {
    // e.target.parentElement.remove();
    const li = e.target.parentElement;
    console.log(li.id, typeof(li.id)); //typeof(li.id)는 string, 문자열 이다
    li.remove();

    /*
        li.id는 문자열 이기 때문에 Num으로 데이터 타입을 바꿔줘야함 
            방법 1) parseInt() : 문자열 인자를 파싱하여 특정 진수의 정수를 반환
            방법 2) Number()   : 정수형과 실수형의 숫자로 변환 (형변환_Type Casting)
    */
    // todos = todos.filter((todo) => todo.id !== parseInt(li.id)); 
    todos = todos.filter((todo) => todo.id !== Number(li.id) );
        /*  filter는 해당 Arr을 해당 조건에 맞는 요소들만 모아 "새로운 배열"로 반환하는 함수이다
            todos = todos.filter(조건); 해당 문장은 todos에 filter된 todos를 재할당 해주겠다는 말임
                (+ todos를 const 가 아닌 let으로 변수 선언을 해주었기 때문에 가능한 것 )
        */
    saveTodos(todos); 
    // console.log( 'you deleted :', e.target.parentNode.firstChild.innerText );
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.innerHTML = `<span class="txt">${newTodo.text}</span>`;

    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener('click', deleteTodo);

    todoList.appendChild(li);
    li.appendChild(btn);
}


function todoSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    const newTodoObj = {
        text: newTodo, 
        id: Date.now(),
    };
    todos.push(newTodoObj); //배열 todos에 Obj저장.
    paintTodo(newTodoObj);
    saveTodos();

    todoInput.value = "" ;
}

todoFrom.addEventListener("submit", todoSubmit );

const savedTodos =  localStorage.getItem(TODOS_KEY);


if( savedTodos !== null ) { //localstorage에 저장된 todo가 존재할 때(null이 아닐 때) -> 저장된 것들 출력
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos; 
    /* 비어있을 배열 todos에, localstorage에 저장된 값을 할당
        -> 새로 todo를 추가할 때, 기존의 array가 초기화되지 않고 추가 된다 */
    
    parsedTodos.forEach(paintTodo);
    // console.log('parsedTodos',parsedTodos);
}

