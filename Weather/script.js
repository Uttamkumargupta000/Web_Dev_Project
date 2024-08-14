const apiKey = "f941034616a8a2a6788fa7da13f14845";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".rain-icon");
// q=berlin&appid=

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        if(data.weather[0].main == "Clouds"){
            WeatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            WeatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "Humidity"){
            WeatherIcon.src = "humidity.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    }

}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);

})
