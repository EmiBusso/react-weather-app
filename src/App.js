import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Buenos Aires" />

        <footer>
          This project was coded by{" "}
          <a href="https://mystifying-archimedes-2ecfd3.netlify.app/">
            {" "}
            Emilia Busso{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/EmiBusso/react-weather-app"
            target="_blanck"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://focused-wozniak-ff9454.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
