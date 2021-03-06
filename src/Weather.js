import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "e91d422394f0de0395bd7df28528dcc8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchLocation(position) {
    let apiKey = "e91d422394f0de0395bd7df28528dcc8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row navigation">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a City ..."
                class="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                class="form-control btn btn-secondary w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Location ????"
                class="btn btn-secondary w-100"
                onClick={getCurrentLocation}
              />
            </div>
          </div>
          <div className="row navigationMobile">
            <input
              type="search"
              placeholder="Enter a City ..."
              class="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-secondary w-100"
            />
            <input
              type="submit"
              value="Location ????"
              class="btn btn-secondary w-100"
              onClick={getCurrentLocation}
            />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
