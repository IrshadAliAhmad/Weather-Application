const apiKey = "0630174d529e807f9e2dc9d4add91f74";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    alert("City not found!");
    return;
  }
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  const weatherType = data.weather[0].main.toLowerCase();
  if (weatherType.includes("cloud")) {
    weatherIcon.src = "images/clouds.png";
  } else if (weatherType.includes("clear")) {
    weatherIcon.src = "images/clear.png";
  } else if (weatherType.includes("rain")) {
    weatherIcon.src = "images/rain.png";
  } else if (weatherType.includes("drizzle")) {
    weatherIcon.src = "images/drizzle.png";
  } else if (weatherType.includes("mist")) {
    weatherIcon.src = "images/mist.png";
  } else {
    weatherIcon.src = "images/weather.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Optional: Press Enter to search
searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
