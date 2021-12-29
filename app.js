let API_URL =
  "https://api.openweathermap.org/data/2.5/weather?q=barcelona&units=metric&appid=673322ccbf396cc5495f632fe87b4384";

const searchBtn = document.querySelector(".search-btn");
const inputValue = document.querySelector(".city-input");
const cityName = document.querySelector(".city-name");
const cityTemperature = document.querySelector(".city-temp");
const sunLogo = document.querySelector(".sun-logo");
const iceLogo = document.querySelector(".ice-logo");

searchBtn.addEventListener("click", () => {
  API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=673322ccbf396cc5495f632fe87b4384`;

  fetch(API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Wrong city name");
        throw new Error("Wrong city name");
      }
    })
    .then((data) => {
      console.log(data);
      cityName.innerHTML = data.name;
      temp = Math.round(data.main.temp);
      cityTemperature.innerHTML = temp + "°C";

      if (temp < 10) {
        sunLogo.style.display = "none";
        iceLogo.style.display = "block";
      } else {
        iceLogo.style.display = "none";
        sunLogo.style.display = "block";
      }
    });
});
