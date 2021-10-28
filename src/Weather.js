import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Buenos Aires</h1>
      <ul>
        <li>Thursday 7:00 p.m</li>
        <li>Clear with periodic clouds</li>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Clear with periodic clouds"
            />
            27 °C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 1% </li>
              <li>Humidity: 60% </li>
              <li>Wind: 27 km/h</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
