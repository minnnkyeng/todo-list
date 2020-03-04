const currentWeather = document.getElementById('weather');
const WEATHER_API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=Seoul-teukbyeolsi,KR&appid=11f781c3ed7f26965d38825903fe1878&units=metric';

function getWeather(url){
    const req = new XMLHttpRequest();
    req.open("GET",url);
    req.onload=function(){
        const weatherApi = JSON.parse(req.responseText);
        const position = weatherApi.name;
        const temperture = weatherApi.main.temp;
        const weather = weatherApi.weather[0].main;
        const wind = weatherApi.wind.speed;

        currentWeather.innerText = "@"+position+", "+temperture+"℃, "+weather+", "+wind+"m/s";
    }
    req.send();
}

function init(){
    getWeather(WEATHER_API_KEY);
}

init();
