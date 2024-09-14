import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1 className="displayed-city">London</h1>
        <div className="current-data row">
          <span className="displayed-emoji-left col-4 text-center">☀️</span>

          <div className="current-temperature col-4">
            <span className="displayed-temperature-value">20</span>
            <span className="displayed-temperature-unit">°C</span>
          </div>

          <span className="displayed-emoji-right col-4 text-center">☀️</span>
        </div>
        <div>
          <p>
            <span className="date-time">Saturday, 24th August</span>,{" "}
            <span className="conditions">Sunshine</span>
            <br />
            Humidity: <span className="humidity text-danger"> 80%</span>, Wind:
            <span className="wind-speed high text-danger"> 26mph</span>
          </p>
        </div>
      </main>
    </div>
  );
}
