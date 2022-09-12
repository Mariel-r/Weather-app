import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <>
      <div class="city">
        <p id="city-name">{props.data.city}</p>
        <p>
          <span id="current-time">
            <FormattedDate date={props.data.date} />
          </span>

          <span className="description text-capitalize">
            {props.data.description}
          </span>
        </p>
      </div>
      <div class="information">
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                id="icon"
                src={props.data.iconUrl}
                alt={props.data.description}
                width="100"
              />
            </div>
            <div class="col">
              <span id="temperature">{Math.round(props.data.temperature)}</span>
              <span class="units" id="celsius-link">
                °C
              </span>
            </div>
            <div class="col">
              <ul class="weatherInformation">
                <li>
                  <strong>
                    {" "}
                    Humidity: <span id="humidity">
                      {props.data.humidity}
                    </span>%{" "}
                  </strong>
                </li>
                <li>
                  Wind: <span id="wind">{Math.round(props.data.wind)}</span>{" "}
                  km/h
                </li>
              </ul>
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
    </>
  );
}
