import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

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
            <WeatherTemp celsius={props.data.temperature} />
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
      </div>
    </>
  );
}
