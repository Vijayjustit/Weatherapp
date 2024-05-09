const apiKey = "bfa521966e6337b32bb2cd008da78faf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

if(response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}
else {var data = await response.json();


    document.querySelector(".city").innerHTML = "in " + data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "cloudyweather.jpg";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "clearweather.jpeg";
    }
else if(data.weather[0].main == "Rain") {
    weatherIcon.src = "rainweather.jpeg";
}
else if(data.weather[0].main == "Drizzle") {
    weatherIcon.src = "lightrainweather.jpeg";
}
else if(data.weather[0].main == "Humid") {
    weatherIcon.src = "humidweather.png";
}
else if(data.weather[0].main == "Snow") {
    weatherIcon.src = "snowweather.jpeg";
}
else if(data.weather[0].main == "Mist") {
    weatherIcon.src = "mistweather.png";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
}



}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);

})

