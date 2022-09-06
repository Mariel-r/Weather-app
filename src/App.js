import WeatherSearch from "./Search.js";
import WeatherInfo from "./WeatherInfo.js";
import WeatherDescription from "./WeatherDescription.js";
import WeatherForecast from "./WeatherForecast.js";

export default function App() {
  return (
    <>
      <WeatherSearch />
      <WeatherInfo />
      <WeatherDescription />
      <WeatherForecast />
    </>
  );
}
