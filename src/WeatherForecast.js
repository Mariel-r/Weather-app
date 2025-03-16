import React, { useState, useEffect } from "react";
import "./Search.css";
import WeatherForecastFinal from "./WeatherForecastFinal";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <>
        {forecast.map(function(day, index) {
          if (index < 5) {
            return (
              <div class="container" id="forecast">
                <WeatherForecastFinal data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </>
    );
  } else {
    const apiKey = "f340eddba0a7afe617246ae948554e4e";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
