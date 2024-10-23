import React, { useState } from "react";

export default function TemperatureDisplay(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperatureDisplay">
        <span className="displayed-temperature-value">
          {Math.round(props.celsius)}
        </span>
        <span className="displayed-temperature-unit">
          °C /{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temperatureDisplay">
        <span className="displayed-temperature-value">
          {Math.round(fahrenheit)}
        </span>
        <span className="displayed-temperature-unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          / °F
        </span>
      </div>
    );
  }
}
