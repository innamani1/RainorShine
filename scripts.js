// script.js
const apiKey = "98a67e93e8b92ca7c22a1376cd794065";  // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherDisplay = document.getElementById("weatherDisplay");
            weatherDisplay.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        })
        .catch(() => alert("City not found!"));
}