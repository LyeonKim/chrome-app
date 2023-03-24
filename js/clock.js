const clock = document.querySelector('#clock'); 
// console.log(clocwwk) //<h2 id="clock"></h2>

function updateClock() { //
    const date = new Date( );
    /*
    padStart( 목표길이, "모자를 때 채울 문자열");
        현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환하는 메서드
    */
    const hours = String(date.getHours()).padStart( 2, "0");
    // const hours = 24; 
    const minutes = String(date.getMinutes()).padStart( 2, "0");
    const seconds = String(date.getSeconds()).padStart( 2, "0");

    
    const year = date.getFullYear();

    const month =  Number(date.getUTCMonth()) + 1 ;

    const weekday = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const todate = `${month}/ ${String(date.getUTCDate())}/ ${weekday[date.getUTCDay()]},`;


    clock.innerHTML = `
        <span class="date">${year}/ ${todate}</span>
        <span class="time">${ hours % 12 > 0 ? `PM ${hours % 12}` : `AM ${hours}` }:${minutes}:${seconds}</span>
        `
    // clock.innerText = new Date().toLocaleTimeString();
}


// setTiemout( updateClock, 1000 );
setInterval( updateClock, 1000 ); // 1초마다 


