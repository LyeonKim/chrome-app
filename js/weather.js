// Geolocation
const API_KEY = "f34dc21e7c7e16b301e0491184dd2a98"

function onGeoOk(position) {
    const lat =  position.coords.latitude;
    const lon =  position.coords.longitude;
    console.log('your location :',lat, lon); 
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);

    // fetch = promise = 당장 실행하지 않고, 시간이 조금 소요된 후에 일어나는 것
        //.then() 체이닝 메서드 : 작업 처리 과정을 연속으로 호출하여 코드를 간결하게한다.
    fetch(url) 
        .then(response => response.json()) 
        .then(data => {
            const city = document.querySelector('.weather div:nth-child(1)');
            const weather = document.querySelector('.weather div:nth-child(2)');
            city.innerText = `in ${data.name}`
            weather.innerText = `weather is "${data.weather[0].main}"/ ${data.main.temp}°`
        }); 
}
function onGeoError() {
    alert("Can't find your location. ")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    // Navigator 인터페이스는 사용자 에이전트의 상태와 신원 정보 
        // 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용
    // Geolocation.getCurrentPosition() 메서드는 장치의 현재 위치


    /*
        {"coord":
            {"lon":126.98,"lat":37.4944},
            "weather":[
                {"id":800,"main":"Clear","description":"clear sky","icon":"01d"}
            ],
            "base":"stations",
            "main":{
                "temp":293.19,
                "feels_like":291.59,
                "temp_min":287.83,
                "temp_max":293.8,
                "pressure":1011,
                "humidity":13
            },
            "visibility":10000,
            "wind":{
                "speed":1.54,
                "deg":90
            },
            "clouds":{"all":0},
            "dt":1679376039,
            "sys":{
                "type":1,
                "id":8105,
                "country":"KR",
                "sunrise":1679348122,
                "sunset":1679391815
            },
            "timezone":32400,
            "id":6800035,
            "name":"Banpobondong",
            "cod":200
        }
    */