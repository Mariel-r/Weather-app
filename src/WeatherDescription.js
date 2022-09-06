import React from "react";
import "./Search.css";

export default function WeatherDescription() {
  return (
    <>
      <div class="information">
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                id="icon"
                src="	http://openweathermap.org/img/wn/04d@2x.png"
                alt="cloudy"
              />
            </div>
            <div class="col">
              <span id="temperature"> 16 </span>
              <span class="units" id="celsius-link">
                {" "}
                °C{" "}
              </span>
            </div>
            <div class="col">
              <ul class="weatherInformation">
                <li>
                  <strong>
                    {" "}
                    Humidity: <span id="humidity">79</span>%{" "}
                  </strong>
                </li>
                <li>
                  Wind: <span id="wind">23</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container" id="forecast"></div>
      <span id="sourse-code">
        <a
          href="https://github.com/Mariel-r/Weather-application"
          target="_blank"
        >
          Open-source code{" "}
        </a>
        , by M Rezaei
      </span>
    </>
  );
}
