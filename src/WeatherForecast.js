import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
    setForecast(response.data.daily);
  }

  function day() {
    let date = new Date(forecast[0].time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (ready) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <div className="weather-forecast-day">{day()}</div>
            <div className="forecast-icon">
              <img
                src={forecast[0].condition.icon_url}
                alt={forecast[0].condition.icon}
              />
            </div>
            <span className="forecast-temperatures">
              <span className="forecast-temperature-max">
                {Math.round(forecast[0].temperature.maximum)}° /{" "}
              </span>
              <span className="forecast-temperature-min">
                {Math.round(forecast[0].temperature.minimum)}°
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `dd83fab04t350832b43f1o8b985e5044`;
    let city = props.city;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
