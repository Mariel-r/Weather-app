import React from "react";
import "./Search.css";

export default function WeatherForecastFinal(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);

    return `${temperature}°`;
  }
  return (
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <div class="col">
        <div class="p-3 border bg-light">
          {day()}
          <br />
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            width="42"
          />
          <br />
          {maxTemperature()}/{minTemperature()}
        </div>
      </div>
    </div>
  );
}
