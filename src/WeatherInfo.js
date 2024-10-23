import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <main className="WeatherInfo">
      <h1 className="displayed-city">{props.info.city}</h1>
      <div className="current-data row">
        <span className="displayed-emoji-left col-4 text-center">
          <img src={props.info.icon} alt={props.info.iconDescription} />
        </span>

        <div className="current-temperature col-4 text-center">
          <span className="displayed-temperature-value">
            {Math.round(props.info.temperature)}
          </span>
          <span className="displayed-temperature-unit">°C</span>
        </div>

        <span className="displayed-emoji-right col-4 text-center">
          <img src={props.info.icon} alt={props.info.iconDescription} />
        </span>
      </div>
      <div>
        <p>
          <span className="date-time">
            <FormattedDate date={props.info.date} />
          </span>
          <span className=" text-capitalize">{props.info.description}</span>
          <br />
          Humidity:{" "}
          <span className="humidity text-danger"> {props.info.humidity}%</span>,
          Wind:
          <span className="wind-speed high text-danger">
            {" "}
            {Math.round(props.info.wind)}mph
          </span>
        </p>
      </div>
    </main>
  );
}
