import React from "react";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const today = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, today)
  );

  return (
    <>
      <label className="title">Forecast</label>
      <div className="forecast-list">
        {data.list.slice(0, 7).map((item, ind) => (
          <div className="daily-item" key={ind}>
            <img
              src={`icons/${item.weather[0].icon}.png`}
              className="icon-small"
              alt="weather"
            />
            <label className="day">{forecastDays[ind]}</label>
            <div className="right-group">
              <label className="descriptions">
                {item.weather[0].description}
              </label>
              <label className="min-max">
                {Math.round(item.main.temp_max)}°C /{" "}
                {Math.round(item.main.temp_min)}°C
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
