import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <main>
        <h1 class="displayed-city" id="displayed-city">
          London
        </h1>
        <div class="current-data">
          <span class="displayed-emoji-left" id="icon-left">
            ☀️
          </span>

          <div class="current-temperature">
            <span
              class="displayed-temperature-value"
              id="displayed-temperature-value"
            ></span>
            <span class="displayed-temperature-unit">20°C</span>
          </div>

          <span class="displayed-emoji-right" id="icon-right">
            ☀️
          </span>
        </div>
        <div>
          <p>
            <span id="day-and-time">Saturday, 24th August</span>,{" "}
            <span id="conditions">Sunshine</span>
            <br />
            Humidity:{" "}
            <span class="highlighted-data" id="humidity">
              80%
            </span>
            , Wind:
            <span class="highlighted-data" id="wind-speed">
              26mph
            </span>
          </p>
        </div>
        <div class="weather-forecast" id="forecast"></div>
      </main>
    </div>
  );
}
