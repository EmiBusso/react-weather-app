import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Monday 15:45",
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherData.icon}
                  alt="Clear with periodic clouds"
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit"> °C </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 1% </li>
                <li>Humidity: {weatherData.humidity}% </li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
