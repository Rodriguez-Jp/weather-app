const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?q=barcelona&units=metric&appid=673322ccbf396cc5495f632fe87b4384";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
