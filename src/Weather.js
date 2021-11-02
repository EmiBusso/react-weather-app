import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
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
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div class="col-6">
              <input
                type="search"
                placeholder="Enter a City ..."
                class="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
} else {
    search();
    return "Loading...";
  }
}