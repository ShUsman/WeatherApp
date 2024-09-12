import "./main.css";

const content = document.getElementById("content");
const city = document.querySelector(".city");
const submit = document.querySelector(".weather-button");
const main = document.querySelector(".main");


submit.addEventListener('click', () => {
    const cityValue = city.value;
    let api = `https://api.weatherapi.com/v1/current.json?key=8ccdc3d653f341709f5150317230403&q=${cityValue}&aqi=no&lang=ru`;
    getWeather(api);
});


async function getWeather(api) {
    // console.log(response);
    try {
        const response = await fetch(api);
        const data = await response.json();
        if(response.status == 200){
            showWeather(data);
        } else {
            alert("ошибка, пиши нормально " + data.error.message);
        };
    } catch (error) {
        alert(error.message);
    };
};


function showWeather(data) {
    main.innerHTML = "";
    const weatherToday = document.createElement('div');
    weatherToday.innerHTML = `
        <div class="weather-today">
            <h1 class="degree">${data.current.temp_c}</h1>
            <h2 class="add-city">${data.location.name}</h2>
        </div>`;
    main.append(weatherToday);
};