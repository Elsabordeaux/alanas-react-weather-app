import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(prop) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      iconDescription: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header className="Search">
          <form class="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              class="search-input"
              id="search-input"
            />
            <input type="submit" value="Search" class="search-button" />
          </form>
        </header>

        <main>
          <h1 className="displayed-city">{weatherData.city}</h1>
          <div className="current-data row">
            <span className="displayed-emoji-left col-4 text-center">
              <img src={weatherData.icon} alt={weatherData.iconDescription} />
            </span>

            <div className="current-temperature col-4 text-center">
              <span className="displayed-temperature-value">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="displayed-temperature-unit">°C</span>
            </div>

            <span className="displayed-emoji-right col-4 text-center">
              <img src={weatherData.icon} alt={weatherData.iconDescription} />
            </span>
          </div>
          <div>
            <p>
              <span className="date-time">
                <FormattedDate date={weatherData.date} />
              </span>
              <span className="conditions">Sunshine</span>
              <br />
              Humidity:{" "}
              <span className="humidity text-danger">
                {" "}
                {weatherData.humidity}%
              </span>
              , Wind:
              <span className="wind-speed high text-danger">
                {" "}
                {Math.round(weatherData.wind)}mph
              </span>
            </p>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = "dd83fab04t350832b43f1o8b985e5044";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${prop.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
