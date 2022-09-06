import React from "react";
import "./Search.css";

export default function WeatherInfo() {
  return (
    <>
      <div class="city">
        <p id="city-name">Mashhad</p>
        <p>
          <span id="current-time"> Monday 4:00 p.m. </span>
          <br />
          <span id="description"> Mostly cloudy </span>
        </p>
      </div>
    </>
  );
}
