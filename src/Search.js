import React from "react";
import "./Search.css";

export default function WeatherSearch() {
  return (
    <div class="weather-app-wrapper">
      <div>
        <form id="search-city">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter a City"
              autocomplete="off"
              autofocus="on"
              id="city-input"
            />
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button">
                <i class="fa fa-search"></i>
              </button>
              <button id="currentButton">Current</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
