import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  function handleResponse(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  if (ready) {
    return (
      <div className=" weatherForecast">
        <div className="row d-flex">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col " key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = `dd83fab04t350832b43f1o8b985e5044`;
    let city = props.city;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
