import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-day">{day()}</div>
      <div className="forecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <span className="forecast-temperatures">
        <span className="forecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}° /{" "}
        </span>
        <span className="forecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </span>
    </div>
  );
}
