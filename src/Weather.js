import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div class="col-6">
            <input
              type="search"
              placeholder="Enter a City ..."
              class="form-control"
              autoFocus="on"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-secondary w-100"
            />
          </div>
          <div class="col-3">
            <button class="btn btn-secondary w-100">Location 📍</button>
          </div>
        </div>
      </form>
      <h1>Buenos Aires</h1>
      <ul>
        <li>Thursday 7:00 p.m</li>
        <li>Clear with periodic clouds</li>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="Clear with periodic clouds"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">27</span>
                <span className="unit"> °C </span>
              </div>
            </div>
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
