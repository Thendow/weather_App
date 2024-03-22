const apiKey = "3158a0220267048e24b6b3df3f5fa106";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".description").innerHTML =
    data.weather[0].description;

  if (data.weather[0].description == "clear sky") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].description == "broken clouds") {
    weatherIcon.src = "images/broken.png";
  } else if (data.weather[0].description == "drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].description == "mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].description == "moderate rain") {
    weatherIcon.src = "images/moderate.png";
  } else if (data.weather[0].description == "heavy rain") {
    weatherIcon.src = "images/heavyrain.png";
  } else if (data.weather[0].description == "overcast clouds") {
    weatherIcon.src = "images/overcast.png";
  } else if (data.weather[0].description == "light rain") {
    weatherIcon.src = "images/lightrain.png";
  } else if (data.weather[0].description == "few clouds") {
    weatherIcon.src = "images/few.png";
  } else if (data.weather[0].description == "scattered clouds") {
    weatherIcon.src = "images/scattered.png";
  } else if (data.weather[0].description == "snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].description == "light snow") {
    weatherIcon.src = "images/light.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
