import React from "react";
import "./Search.css";

export default function WeatherForecast() {
  return (
    <div class="container" id="forecast">
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div class="col">
          <div class="p-3 border bg-light">
            Tue
            <br />
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt=""
              width="42"
            />
            <br />
            30°/18°
          </div>
        </div>

        <div class="col">
          <div class="p-3 border bg-light">
            Wed
            <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            />
            <br />
            31°/18°
          </div>
        </div>

        <div class="col">
          <div class="p-3 border bg-light">
            Thu
            <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            />
            <br />
            30°/19°
          </div>
        </div>

        <div class="col">
          <div class="p-3 border bg-light">
            Fri
            <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            />
            <br />
            28°/19°
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            Sat
            <br />
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=""
              width="42"
            />
            <br />
            26°/19°
          </div>
        </div>
      </div>
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
  );
}
