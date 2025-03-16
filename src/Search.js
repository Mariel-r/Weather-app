import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f340eddba0a7afe617246ae948554e4e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div class="weather-app-wrapper">
        <div>
          <form id="search-city" onSubmit={handleSubmit}>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter a City"
                autocomplete="off"
                autofocus="on"
                id="city-input"
                onChange={handleCityChange}
              />
              <div class="input-group-append">
                <button class="btn btn-secondary" type="button">
                  <i class="fa fa-search"></i>
                </button>
                <button id="currentButton">Current</button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
          <small id="sourse-code">
            <a
              href="https://github.com/Mariel-r/Weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code{" "}
            </a>
            , by M Rezaei
          </small>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
